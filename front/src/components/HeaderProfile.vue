<template>

<div class="flex flex-row justify-center py-6 italic">
        <div>
            <div class="text-center font-semibold text-xl">
                {{firstName}} {{lastName}}
            </div>
            <div class="text-center">
                <span>About Me</span>
                <p>{{bio}}</p>
            </div>

            <div v-if="currentUser === username" class="text-center">
                <button class="font-light p-2 text-lg rounded mt-2 bg-settings" @click="navigateToUserSettings">
                    User Settings
                </button>
            <div>
        </div>
    </div>

    <div v-if="currentUser === username" class="text-center">
        <div class="py-4 text-center">
            Thinking to write a post?
                    <div class="flex gap-6">
                        <div>
                            <button class="font-semibold text-lg rounded p-2 text-white mt-2 bg-button">
                                <router-link to="/create">New Post</router-link>
                            </button>
                        </div>
                        <div>
                            <button class="font-semibold text-lg rounded p-2 text-white mt-2 bg-button">
                                <router-link to="/createsingle">What i'm thinking is...</router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="text-center">
                {{username}}'s Post
            </div>

        </div>
    </div>

</template>

<script>
import axios from 'axios'
import AllPosts from './AllPostsByUser.vue'
import {checkIfLogin} from '@/mixins/mix.js'

export default {
    name: "HeaderProfileUser",
    components: {
        AllPosts
    },
    mixins:[checkIfLogin],
    data(){
        return{
            // posts:[],
            username:'',
            firstName:'',
            lastName:'',
            bio:'',
            // currentUser:''
        }
    },
    async created(){
        this.getProfile(this.$route.params.username);
        this.userIsLogin()
        // this.currentUser = (await axios.get(`/user/signin`)).data.session.passport.user;
        
    },
    methods:{
        navigateToUserSettings(){
            this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
        },
        async getProfile(username){
            const res = await axios.get(`/user/profile/${username}`)
            this.username = res.data.user.username;
            this.firstName = res.data.user.firstName;
            this.lastName = res.data.user.lastName;
            this.bio = res.data.user.bio;
            // this.posts = res.data.posts;
        },
        navigateToUserProfile(){
            this.$router.push({name: 'SinglePostsByUser', params: {username: this.username}});
        }
    }
}
</script>

<style scoped>

#singlePost{
    cursor: Pointer;
}

</style>