<template>

    <div class="flex flex-row justify-center">
        <form @submit.prevent="updateProfile" class="py-5 font-bold italic">
            <div class="bg-bgPic p-5 rounded-2xl">
                <h2>Bio: <br> <textarea type="text" v-model="user.bio" cols="20" rows="3" class="p-1 rounded w-full"> </textarea></h2>

                <h2>Firstname: <br> <input type="text" v-model="user.firstName" class="p-1 rounded w-full"></h2>

                <h2>Lastname: <br> <input type="text" v-model="user.lastName" class="p-1 rounded w-full" ></h2>

                <button class="mt-3 p-3 bg-button text-white rounded font-bold w-full">Update Changes</button>

                <button @click="deleteAccount(id)" class="my-4 bg-danger text-white p-3 rounded font-bold w-full">Delete Account</button>
            </div>
        </form>
    </div>
    
</template>

<script>
import axios from 'axios';
import {userConfigurationPage} from '@/mixins/mix.js'

export default {
    name:'UserUpdate',
    mixins: [userConfigurationPage],
    // data(){
    //     return{
    //         user: {
    //             id:'',
    //             firstName:'',
    //             lastName:'',
    //             bio:'',
    //             username:'',
    //         },
            
    //     }
    // },
    // async created(){
    //     this.getProfile(this.$route.params.username)
    // },
    methods:{
        // async getProfile(username){
        //     try{
        //         const res = await axios.get(`/user/profile/${username}`)
        //         this.user.firstName = res.data.user.firstName;
        //         this.user.lastName = res.data.user.lastName;
        //         this.user.bio = res.data.user.bio;
        //         this.user.username = res.data.user.username;
        //         this.user.id = res.data.user._id
        //         //console.log(this.user.id)
        //     } catch(err){
        //         console.log(err)
        //     }
        // },
        // async updateProfile(){
        //     try{
        //         let form = new FormData();
        //         form.append('username', this.user.username);
        //         form.append('lastName', this.user.lastName);
        //         form.append('firstName', this.user.firstName);
        //         form.append('bio', this.user.bio);

        //         const res = await axios.put(`/user/profile/${this.user.username}`, this.user)
        //         console.log(res)
        //         this.$router.push(`/profile/${this.user.username}`)
        //     } catch(err){
        //         console.log(err)
        //     }
        // },
        // async deleteAccount(){
        //     try{
        //         const id = this.user.id
        //         const del = await axios.delete(`/user/users/${id}`)
        //         this.$router.push('/user/signup')
        //     } catch(err){
        //         console.log(err)
        //     }
        // }
    }
}
</script>

<style scoped>
input, textarea{
    outline: none;
}
</style>