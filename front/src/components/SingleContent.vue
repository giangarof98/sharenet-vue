<template>
    <div class="flex flex-row justify-center mt-8">
       <div class="p-5">

            <a @click="navigateToUserProfile" class=" font-semibold italic username">{{username}}</a>

            <img :src="imageUrl" alt="content" class="rounded-lg" > 

            <p class="font-semibold text-lg">~{{post.description}}</p>

            <button @click="likePost" class="w-full">
                <!-- like length -->
                <div v-if='liked.length == 0'>
                    <p>No likes yet; come back later...</p>
                </div>
                <div v-else>
                    {{liked.length}}
                </div>

                <!-- heart condition -->
                <div v-if="liked.includes(this.userId)">
                    <font-awesome-icon icon="fa-solid fa-heart" class="like icon-hearth"/>
                </div>
                <div v-else>
                    <font-awesome-icon icon="fa-solid fa-heart" class="icon-hearth"/>
                </div>
            </button>

            <div>
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
        
    },

    methods: {
        async likePost(){
            
            try{
                const id = this.$route.params.id
                const response = await axios.post(`/content/${id}/like`);
                this.$router.go(0)
            } catch(err){
                console.log(err)
            }
        },
        async fetchData(id){
            const likeHearth = document.getElementById('icon-heart')
            try {
                const user = await axios.get(`/user/signin`)
                const res = await axios.get(`/content/${id}`);
                this.post = res.data
                this.userId = user.data.user._id
                this.imageUrl = this.post.image[0].url;
                this.username = res.data.author.username;
                this.liked = res.data.likes
                
                const like = Object.values(this.liked)
                console.log(like)
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
    .icon-hearth{
        height: 2.5rem;
    }
    .icon-hearth:hover{
        color: red;
    }
    .like{
        color:red
    }
</style>