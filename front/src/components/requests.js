import axios from 'axios';
const api = '/content';

export default class API {

    static async getAll(){
        const res = await axios.get(api);
        return res.data;
    }

    static async getOne(id){
        const res = await axios.get(`${api}/${id}`)
        return res.data;
    }

    static async createPost(post){
        const res = await axios.post(`${api}/create`, post);
        console.log(res.data)
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
