<template>
    <div class="flex flex-row justify-center mt-8">
       <div class="p-5">

            <a @click="navigateToUserProfile" class=" font-semibold italic username">{{username}}</a>

            <img :src="imageUrl" alt="content" class="rounded-lg" > 

            <p class="font-semibold text-lg">~{{post.description}}</p>

            <button @click="likePost">
                <font-awesome-icon icon="fa-solid fa-heart" id="icon-heart"/>
                <!-- <font-awesome-icon :icon="liked ? 'fa-solid fa-heart like' : 'fa-solid fa-heart'" class="icon-heart" :style="{ color: liked ? 'red' : 'inherit' }"/> -->
            </button>

            <div class="">
                <div v-if="currentUser === username" class="flex flex-row justify-between">
                    <button @click="deleteContent(post._id)" 
                            class="font-semibold text-lg bg-button rounded p-1 text-white mt-2 bg-danger">
                        Delete
                    </button>

                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2 bg-edit">
                        <router-link :to="`/content/edit/${post._id}`">
                            Edit
                        </router-link>
                    </button>
                </div>
            </div>
            {{liked.length}}
       </div> 
    </div>
</template>

<script>
import axios from 'axios';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { onMounted } from '@vue/runtime-core';

/* add icons to the library */
library.add(faHeart)

export default {
    name:'SingleContent',
    components:{
        FontAwesomeIcon
    },
    data(){
        return {
            post: [],
            imageUrl: '',
            username: '',
            currentUser: '',
            userId:'',
            liked: []
            
        }
    },

    async created(){
        this.fetchData(this.$route.params.id);
        const user = await axios.get(`/user/signin`)
        this.currentUser = user.data.session.passport.user;
        this.userId = user.data.user._id
        //this.checkLike()

        // const like = Object.values(this.liked)
        //console.log(this.liked)
        
        //console.log(user)
        
    },

    methods: {
        // async checkLike(){
        //     this.liked = this.post.likes
        // },
        async likePost(){
            
            try{
                const id = this.$route.params.id
                const response = await axios.post(`/content/${id}/like`);
            } catch(err){
                console.log(err)
            }
        },
        async fetchData(id){
            try {
                const user = await axios.get(`/user/signin`)
                const res = await axios.get(`/content/${id}`);
                this.post = res.data
                this.userId = user.data.user._id
                this.imageUrl = this.post.image[0].url;
                this.username = res.data.author.username;
                this.liked = res.data.likes
                //console.log(this.post.likes, this.userId)
                
                const like = Object.values(this.liked)
                if(like.includes(this.userId)){
                    console.log('l')
                }
                console.log(like, this.userId)    
            } catch (error) {
                console.log(error);
            }

        },
        async deleteContent(id){
            try{
                const res = await axios.delete(`/content/${id}`)
                this.$router.push('/content')
            } catch(err){
                console.log(err)
            }

        },
        navigateToUserProfile(){
            this.$router.push({name: 'Profile', params: {username: this.username}});
        }
    }
}
</script>

<style scoped>
    .username{
        cursor: pointer;
    }
    /* .icon-hearth{
        height: 2.5rem;
    }
    .icon-hearth:hover{
        color: red;
    }
    .like{
        color:red
    } */
</style>