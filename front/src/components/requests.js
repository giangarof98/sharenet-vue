import axios from 'axios';
const api = '/content';
const apiuser = '/user'

export default class API {

    //Posts
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


    static async update(id, post){
        const res = await axios.put(`${api}/edit/${id}`, post);
        return res.data;
    }

    static async delete(id){
        const res = await axios.delete(`${api}/${id}`)
        return res.data;
    }

    //Users

    static async signup(user){
        const res = await axios.post(`${apiuser}/signup`, user);
        return res.data;
    }

    static async signin(user){
        const res = await axios.post(`${apiuser}/signin`, user);
        return res.data;
    }

    //Content / Review

    static async createReview(id, review){
        const res = await axios.post(`/content/${id}/review`, review)
        return res.data
    }

}
