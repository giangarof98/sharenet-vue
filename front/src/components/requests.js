//const api_url = 'http://localhost:3000';
import axios from 'axios';
const api_url = '/contents';
const api = '/content';
const createPost = '/new'

export default class API {

    static async getAll(){
        const res = await axios.get(api_url);
        return res.data;
    }

    static async getOne(id){
        const res = await axios.get(`${api}/${id}`)
        return res.data;
    }

    static async create(post){
        const res = await axios.post(createPost, post)
        return res.data;
    }

    // static async update(id, post){
    //     const res = await fetch(`${api_url}/${id}`, {
    //         method: 'put'
    //     });
    //     return res.data;
    // }

    static async delete(id){
        const res = await axios.delete(`${api}/${id}`)
        return res.data;
    }

}
