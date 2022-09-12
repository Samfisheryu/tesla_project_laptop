from flaskext.mysql import MySQL


class Database:
    def __init__(self, app, configs):
        self.mysql = MySQL()
        app.config['MYSQL_DATABASE_USER'] = configs["user"]
        app.config['MYSQL_DATABASE_PASSWORD'] = configs["password"]
        app.config['MYSQL_DATABASE_DB'] = configs["DB"]
        app.config['MYSQL_DATABASE_HOST'] = configs["host"]
        self.mysql.init_app(app)

    def get_one(self, table, name):
        cur = self.mysql.get_db().cursor()
        if table == 'comp':
            cur.execute("SELECT * FROM comp WHERE manufacturer=%s", name)
            data = cur.fetchall()
        elif table == 'mapping':
            name = int(name)
            cur.execute("SELECT * FROM mapping WHERE component_id=%s", name)
            data = cur.fetchall()
        else:
            cur.execute("SELECT * FROM failure_mode WHERE fail_code=%s", name)
            data = cur.fetchone()
        cur.close()
        return data

    def create_component(self, manufacturer, contact, failure_rate, component_name, Ifupdate):
        find = False
        data = self.get_one('comp', manufacturer)
        for row in data:
            if row[4] == component_name:
                find = True
        if find and Ifupdate:
            return "Fail"
        cur = self.mysql.get_db().cursor()
        cur.execute("INSERT INTO comp (manufacturer, contact, failure_rate, component_name) VALUES (%s,%s,%s,%s)",
                    (manufacturer, contact, failure_rate, component_name))
        self.mysql.get_db().commit()
        cur.close()
        return "Done"

    def create_fail_mode(self, fail_mode_name, fail_code):
        print(type(fail_mode_name))
        print(type(fail_code))
        data = self.get_one('fail_mode', fail_code)
        if data:
            return "Fail"
        cur = self.mysql.get_db().cursor()
        cur.execute("INSERT INTO failure_mode (fail_mode_name, fail_code) VALUES (%s,%s)",
                    (fail_mode_name, fail_code))
        self.mysql.get_db().commit()
        cur.close()
        return "Done"

    def create_mapping(self, component_id, failmode_id):
        find = False
        data = self.get_one('mapping', str(component_id))
        for row in data:
            if row[2] == failmode_id:
                find = True
        if find:
            return "Fail"
        cur = self.mysql.get_db().cursor()
        cur.execute("INSERT INTO mapping (component_id, failmode_id) VALUES (%s,%s)",
                    (component_id, failmode_id))
        self.mysql.get_db().commit()
        cur.close()
        return "Done"

    def get_all(self, table):
        cur = self.mysql.get_db().cursor()
        if table == 'fail_mode':
            cur.execute("SELECT * from failure_mode")
        elif table == 'comp':
            cur.execute("SELECT * from comp")
        else:
            cur.execute("SELECT * from mapping")
        data = cur.fetchall()
        cur.close()
        return data

    def get_mapping(self):
        cur = self.mysql.get_db().cursor()
        cur.execute("SELECT mapping.id,"
                    "mapping.component_id,"
                    "comp.manufacturer,"
                    "comp.component_name,"
                    "mapping.failmode_id,"
                    "failure_mode.fail_code,"
                    "failure_mode.fail_mode_name "
                    "FROM comp "
                    "INNER JOIN mapping "
                    "ON comp.id = mapping.component_id "
                    "INNER JOIN failure_mode "
                    "ON mapping.failmode_id = failure_mode.id "
                    "ORDER BY comp.id;")
        data = cur.fetchall()
        cur.close()
        return data

    def delete_one(self, table, cid):
        cur = self.mysql.get_db().cursor()
        cid = cid
        if table == 'fail_mode':
            cur.execute("DELETE failure_mode,mapping "
                        "FROM failure_mode "
                        "LEFT JOIN mapping "
                        "ON failure_mode.id = mapping.failmode_id "
                        "WHERE failure_mode.id=%s", cid)
        elif table == 'comp':
            cur.execute("DELETE comp,mapping "
                        "FROM comp "
                        "LEFT JOIN mapping "
                        "ON comp.id = mapping.component_id "
                        "WHERE comp.id=%s", cid)
        else:
            cur.execute("DELETE FROM mapping WHERE id=%s", cid)

        self.mysql.get_db().commit()
        cur.close()
        return "Done"
