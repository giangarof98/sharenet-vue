<template>
    <input type="text" v-model="searchTerm" @input="searchUsers" placeholder="Search by username">
    <div v-if="matchingUser"> <a class="cursor-pointer" @click="goToProfile(matchingUser.username)"> {{ matchingUser.username}} </a> </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"SearchBoxUser",
    data(){
        return{
            users:[],
            searchTerm:'',
            matchingUser:null,
            username:''
        }
    },
    async created(){
        const res = await axios.get(`/user/`)
        this.users = res.data
    },
    computed:{
        match(){
            return this.users.find((user => user.username === this.searchTerm))
        }
    },
    methods: {
        searchUsers(){
            this.matchingUser = this.match;
        },
        goToProfile(username){
            console.log(username)
            this.$router.push({name: 'Profile',  params: {username: this.matchingUser.username}})
        }
    }

}
</script>