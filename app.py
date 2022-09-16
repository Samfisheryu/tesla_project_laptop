from flask import Flask, render_template, request, make_response, jsonify, redirect
# from flask_mysqldb import MySQL
# import mysql_queries as mq
from mysql_queries_class import *
from flask_cors import CORS
from quicksort import QuickSort

app = Flask(__name__)
CORS(app)
mysql_configs = {"user": "root", "password": "YUneng1210", "DB": "flask_test", "host": "localhost"}

mysql = Database(app, mysql_configs)


def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response


@app.route('/component')
def component():
    data = mysql.get_all('comp')
    # return render_template('studentsdata.html', students=data)
    return jsonify(data)


@app.route('/addcomponent', methods=['GET', 'POST'])
def create_component():
    print(request.json)
    if request.method == 'POST':
        manufacturer = request.json['user']['manufacturer']
        contact = request.json['user']['contact']
        failure_rate = request.json['user']['failure_rate']
        component_name = request.json['user']['component_name']
        # r_data = mq.get_all_students()
        done = mysql.create_component(manufacturer, contact, failure_rate, component_name, True)
        print(done)
        return redirect('/component')
    else:
        return render_template('index.html')


@app.route('/updatecomponent', methods=['GET', 'POST'])
def update_component():
    print(request.json)
    if request.method == 'POST':
        cid = request.json['user']['id']
        manufacturer = request.json['user']['manufacturer']
        component_name = request.json['user']['component_name']
        done = mysql.delete_one('comp', cid)
        print(done)
        contact = request.json['user']['contact']
        failure_rate = request.json['user']['failure_rate']
        done2 = mysql.create_component(manufacturer, contact, failure_rate, component_name, False)
        print(done2)
        return redirect('/component')
    else:
        return render_template('index.html')


@app.route('/deletecomponent', methods=['GET', 'POST'])
def delete_component():
    print(request.json)
    if request.method == 'POST':
        cid = request.json['user']['id']
        done = mysql.delete_one('comp', cid)
        print(done)
        return redirect('/component')
    else:
        return render_template('index.html')


@app.route('/failure')
def failure():
    data = mysql.get_all('fail_mode')
    # return render_template('studentsdata.html', students=data)
    return jsonify(data)


@app.route('/addfailure', methods=['GET', 'POST'])
def create_failure():
    print(request.json)
    if request.method == 'POST':
        fail_name = request.json['user']['fail_mode_name']
        fail_code = request.json['user']['fail_code']
        # r_data = mq.get_all_students()
        done = mysql.create_fail_mode(fail_name, fail_code)
        print(done)
        return redirect('/failure')
    else:
        return render_template('index.html')


@app.route('/updatefail', methods=['GET', 'POST'])
def update_failure():
    print(request.json)
    if request.method == 'POST':
        cid = request.json['user']['id']
        fail_code = request.json['user']['fail_code']
        done = mysql.delete_one('fail_mode', cid)
        print(done)
        fail_mode_name = request.json['user']['fail_mode_name']
        done2 = mysql.create_fail_mode(fail_mode_name, fail_code)
        print(done2)
        return redirect('/failure')
    else:
        return render_template('index.html')


@app.route('/deletefail', methods=['GET', 'POST'])
def delete_failure():
    if request.method == 'POST':
        cid = request.json['user']['id']
        done = mysql.delete_one('fail_mode', cid)
        print(done)
        return redirect('/failure')
    else:
        return render_template('index.html')


@app.route('/mapping')
def mapping():
    data = mysql.get_mapping()
    # return render_template('studentsdata.html', students=data)
    return jsonify(data)


@app.route('/addmapping', methods=['GET', 'POST'])
def create_mapping():
    print(request.json)
    if request.method == 'POST':
        component_id = request.json['user']['component_id']
        failmode_id = request.json['user']['failmode_id']
        # r_data = mq.get_all_students()
        done = mysql.create_mapping(component_id, failmode_id)
        print(done)
        return redirect('/mapping')
    else:
        return render_template('index.html')


@app.route('/updatemapping', methods=['GET', 'POST'])
def update_mapping():
    if request.method == 'POST':
        cid = request.json['user']['id']
        component_id = request.json['user']['component_id']
        failmode_id = request.json['user']['failmode_id']
        done = mysql.delete_one('mapping', cid)
        print(done)
        done2 = mysql.create_mapping(component_id, failmode_id)
        print(done2)
        return redirect('/mapping')
    else:
        return render_template('index.html')


@app.route('/deletemapping', methods=['GET', 'POST'])
def delete_mapping():
    if request.method == 'POST':
        cid = request.json['user']['id']
        done = mysql.delete_one('mapping', cid)
        print(done)
        return redirect('/mapping')
    else:
        return render_template('index.html')


@app.route('/badcompo', methods=['GET'])
def top5_bad_comp():
    data = mysql.get_all('comp')
    print(type(data))
    data = list(data)
    sorted_data = QuickSort(3, data, 0, len(data) - 1)
    # data = list(data)
    data = sorted_data.nums[0:5]
    print(data)
    return jsonify(data)


@app.route('/mostused', methods=['GET'])
def most_used():
    data = mysql.get_all('comp')
    dic = {}
    data = list(data)
    for i in data:
        cur = list(i)
        if cur[4] not in dic:
            dic[cur[4]] = 1
        else:
            dic[cur[4]] += 1
    data = []
    for item in dic.items():
        data.append(item)
    sorted_data = QuickSort(1, data, 0, len(data) - 1)
    return jsonify(sorted_data.nums[-5:])


@app.route('/highestPFR', methods=['GET'])
def highest_PFR():
    data = mysql.get_all('comp')
    dic = {}
    data = list(data)
    for i in data:
        cur = list(i)
        if cur[1] not in dic:
            dic[cur[1]] = [cur[3], 1]
        else:
            dic[cur[1]][1] += 1
            dic[cur[1]][0] += cur[3]
    data = []
    for key in dic:
        cur = [key, dic[key][0] / dic[key][1]]
        data.append(tuple(cur))
    sorted_data = QuickSort(1, data, 0, len(data) - 1)
    return jsonify(sorted_data.nums[-5:])


if __name__ == "__main__":
    app.debug = True
    app.run(host='localhost', port=5000)
