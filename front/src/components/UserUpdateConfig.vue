<template>

    <form @submit.prevent="updateProfile" enctype="multipart/form-data">
        <h2>Profile Picture</h2>

        <img :src="user.image" alt="">
        <h3 class="text-lg font-semibold">Change Profile Picture</h3>
        <input name="image" ref="photo" type="file" class="border rounded py-0.9 px-1 focus:outline-none" accept=".png, .jpg, .jpeg" @change="selectFile"/>

        <h2>Bio: <input type="text" v-model="user.bio"></h2>

        <h2>firstName: <input type="text" v-model="user.firstName"></h2>

        <h2>lastName: <input type="text" v-model="user.lastName"></h2>

        <button>Update Changes</button>
    </form>

    <button @click="deleteAccount(id)">Delete Account</button>
    
</template>

<script>
import axios from 'axios';

export default {
    name:'UserUpdate',
    data(){
        return{
            user: {
                id:'',
                firstName:'',
                lastName:'',
                bio:'',
                username:'',
                image:''
            }
            
        }
    },
    async created(){
        this.getProfile(this.$route.params.username)
    },
    methods:{
        selectFile(){
            this.user.image = this.$refs.photo.files[0];
            console.log(this.user.image)
        },
        async getProfile(username){
            try{
                const res = await axios.get(`/content/profile/${username}`)
                this.user.firstName = res.data.user.firstName;
                this.user.lastName = res.data.user.lastName;
                this.user.bio = res.data.user.bio;
                this.user.username = res.data.user.username;
                this.user.image = res.data.user.profilePic;
                this.user.id = res.data.user._id
                //console.log(this.user.id)
            } catch(err){
                console.log(err)
            }
        },
        async updateProfile(){
            try{
                let form = new FormData();
                form.append('username', this.user.username);
                form.append('lastName', this.user.lastName);
                form.append('firstName', this.user.firstName);
                form.append('bio', this.user.bio);
                form.append('profilePic', this.user.image)
                const res = await axios.put(`/content/profile/${this.user.username}`, this.user)
                console.log(res.data)
                this.$router.push(`/profile/${this.user.username}`)
            } catch(err){
                console.log(err)
            }
        },
        async deleteAccount(){
            try{
                const id = this.user.id
                const del = await axios.delete(`/user/users/${id}`)
                console.log(del)
                this.$router.push('/user/signup')
            } catch(err){
                console.log(err)
            }
        }
    }
}
</script>