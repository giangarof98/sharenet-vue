//const api_url = 'http://localhost:3000';
import axios from 'axios';
const api_url = '/contents';

export default class API {

    static async getAll(){
        const res = await axios.get(api_url);
        return res.data;
    }

    static async getOne(){
        const res = await fetch(`${api_url}/${id}`, {
            method: 'get'
        });
        return res.data;
    }

    static async create(post){
        const res = await fetch(api_url, post, {
            method: 'get'
        });
        return res.data;
    }

    static async update(id, post){
        const res = await fetch(`${api_url}/${id}`, {
            method: 'put'
        });
        return res.data;
    }

    static async delete(id){
        const res = await fetch(`${api_url}/${id}`, {
            method: 'delete'
        });
        return res.data;
    }

}
