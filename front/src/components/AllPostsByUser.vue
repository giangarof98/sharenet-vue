<template>
    <div class="flex flex-row justify-center">
        <div class="md:grid grid-cols-3 w-full p-4 gap-3">
            <div v-for="post in posts.slice().reverse()" :key="post._id" class="p-4 bg-bgPic rounded-lg">
                <img :src="`${post.image[0].url}`" alt="content" class="w-full rounded-lg">
                <div class="text-center italic font-semibold">{{post.description}}</div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'AllPosts',
    data(){
        return{
            posts:[],
            username:'',
            // firstName:'',
            // lastName:'',
            // bio:'',
            currentUser:''
        }
    },
    async created(){
        this.getProfile(this.$route.params.username);
        this.currentUser = (await axios.get(`/user/signin`)).data.session.passport.user;
        
    },
    methods:{
        navigateToUserSettings(){
            this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
        },
        async getProfile(username){
            const res = await axios.get(`/user/profile/${username}`)
            this.username = res.data.user.username;
            // this.firstName = res.data.user.firstName;
            // this.lastName = res.data.user.lastName;
            // this.bio = res.data.user.bio;
            this.posts = res.data.posts;
            console.log(res)
        },
    }
}
</script>