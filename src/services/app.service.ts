const axios = require('axios');

// import app from "../../../../Flask demo2/app.py"

export class AppService {


    public async getFails(): Promise<any> {
        const response = await axios.get('http://127.0.0.1:5000/failure');
        return response.data;
    }

    public async addFails(user: any) {
        const response = await axios.post(`http://127.0.0.1:5000/addfailure`, {user});
        return response.data;
    }

    public async deleteFails(user: any) {
        const response = await axios.post(`http://127.0.0.1:5000/deletefail`, {user});
        return response.data;
    }

    public async updateFails(user: any) {
        const response = await axios.post(`http://127.0.0.1:5000/updatefail`, {user});
        return response.data;
    }

    public async getComps(): Promise<any> {
        const response = await axios.get('http://127.0.0.1:5000/component');
        return response.data;
    }

    public async addComps(user: any) {
        const response = await axios.post(`http://127.0.0.1:5000/addcomponent`, {user});
        return response.data;
    }

    public async deleteComps(user: any) {
        const response = await axios.post(`http://127.0.0.1:5000/deletecomponent`, {user});
        return response.data;
    }

    public async updateComps(user: any) {
        const response = await axios.post(`http://127.0.0.1:5000/updatecomponent`, {user});
        return response.data;
    }

    public async getMapping(): Promise<any> {
        const response = await axios.get('http://127.0.0.1:5000/mapping');
        return response.data;
    }

    public async addMapping(user: any) {
        const response = await axios.post(`http://127.0.0.1:5000/addmapping`, {user});
        return response.data;
    }

    public async deleteMapping(user: any) {
        const response = await axios.post(`http://127.0.0.1:5000/deletemapping`, {user});
        return response.data;
    }

    public async updateMapping(user: any) {
        const response = await axios.post(`http://127.0.0.1:5000/updatemapping`, {user});
        return response.data;
    }

    public async get_bad_comp(): Promise<any> {
        const response = await axios.get('http://127.0.0.1:5000/badcompo');
        return response.data;
    }

    public async get_m_used(): Promise<any> {
        const response = await axios.get('http://127.0.0.1:5000/mostused');
        return response.data;
    }

    public async get_h_PFR(): Promise<any> {
        const response = await axios.get('http://127.0.0.1:5000/highestPFR');
        return response.data;
    }


}