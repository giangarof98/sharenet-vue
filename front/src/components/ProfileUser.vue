<template>

    <HeaderProfileUser/>

    <div class='text-center'>
        <a @click="navigateToUserProfile" class="font-semibold italic text-xl" id="singlePost">See single posts</a>
    </div>

    <AllPosts/>

</template>

<script>
import axios from 'axios'
import AllPosts from './AllPostsByUser.vue'
import HeaderProfileUser from './HeaderProfile.vue'
import {checkIfLogin, profileUser} from '@/mixins/mix.js'

export default {
    name: "ProfileUser",
    components: {
        AllPosts,
        HeaderProfileUser
    },
    mixins:[checkIfLogin, profileUser],
    data(){
        return{
            // posts:[],
            username:'',
            // firstName:'',
            // lastName:'',
            // bio:'',
            // currentUser:''
        }
    },
    // async created(){
    //     this.getProfile(this.$route.params.username);
    //     // this.userIsLogin()
    //     // this.currentUser = (await axios.get(`/user/signin`)).data.session.passport.user;
        
    // },
    methods:{
        navigateToUserSettings(){
            this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
        },
        // async getProfile(username){
        //     const res = await axios.get(`/user/profile/${username}`)
        //     this.username = res.data.user.username;
        //     this.firstName = res.data.user.firstName;
        //     this.lastName = res.data.user.lastName;
        //     this.bio = res.data.user.bio;
        //     // this.posts = res.data.posts;
        // },
        // navigateToUserProfile(){
        //     this.$router.push({name: 'SinglePostsByUser', params: {username: this.username}});
        // }
    }
}
</script>

<style scoped>

#singlePost{
    cursor: Pointer;
}

</style>