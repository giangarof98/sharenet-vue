import axios from 'axios';
const api = '/content';
const apiuser = '/user'

export default class API {
    //Users

    static async signup(user){
        const res = await axios.post(`${apiuser}/signup`, user);
        return res.data;
    }

    static async signin(user){
        const res = await axios.post(`${apiuser}/signin`, user);
        return res.data;
    }
}
