<template>

    <div>{{firstName}} {{lastName}}</div>

    <div  v-for="post in posts" :key="post._id">
        <div>{{post.description}}</div>
        <img :src="`${post.image[0].url}`" alt="content">
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'ProfileUser',
    data(){
        return{
            posts:[],
            username:'',
            firstName:'',
            lastName:'',
            bio:'',
            currentUser:''
        }
    },
    async created(){
        this.getPostsByUser()
    },
    methods:{
        async getPostsByUser(){
            const res = await axios.get(`/content/profile`)
            this.username = res.data.username;
            this.firstName = res.data.user.firstName;
            this.lastName = res.data.user.lastName;
            this.posts = res.data.posts
            console.log(this.posts)
        }
    }
}
</script>