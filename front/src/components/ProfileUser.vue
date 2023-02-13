<template>

    <div>{{firstName}} {{lastName}}</div>
    <div>
        <h2>Bio: {{bio}}</h2>
    </div>
    <div v-if="currentUser === username">
        <button class="font-semibold text-lg rounded p-1 text-white mt-2 bg-button" @click="navigateToUserSettings">
            User Settings
            <!-- <router-link :to="`/profile/${username}/settings`">User Settings</router-link> -->
        </button>
    <div>
    </div>
        <div>
            Thinking to write a post?
            <div>
                <div>
                    <button class="font-semibold text-lg rounded p-1 text-white mt-2 bg-button">
                        <router-link to="/create">New Post</router-link>
                    </button>
                </div>
                <div>
                    <button class="font-semibold text-lg rounded p-1 text-white mt-2 bg-button">
                        <router-link to="/create">What i'm thinking is...</router-link>
                    </button>
                </div>
            </div>
        </div>
    
    </div>

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
        this.getProfile(this.$route.params.username);

        this.currentUser = (await axios.get(`/user/signin`)).data.passport.user;
        // console.log(this.currentUser)
        
    },
    methods:{
        navigateToUserSettings(){
            this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
        },
        async getProfile(username){
            const res = await axios.get(`/content/profile/${username}`)
            this.username = res.data.user.username;
            this.firstName = res.data.user.firstName;
            this.lastName = res.data.user.lastName;
            this.bio = res.data.user.bio;
            this.posts = res.data.posts;
            console.log(this.$route.params.username);
        }

    }
}
</script>