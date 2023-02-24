<template>
    <div v-if="currentUser">
        <SearchBoxUser/>
    </div>
    
    <div class="text-center my-6">
        <a @click="navigateToAllPosts" class="cursor text-xl">All Posts</a>
    </div>

     <div class="flex flex-row my-6">
        <div class="w-6/12 text-center mx-auto">
            <div v-for="post in posts" :key="post._id" class="my-5">
                <div class="bg-bgPic rounded flex justify-around my-auto">
                    <div>
                        <p class="italic font-semibold text-xl">{{post.author.username}}</p>
                        <p class="italic text-lg">{{post.description}}</p>
                    </div>
                    <div class="flex gap-5">
                        <div v-if="currentUser === post.author.username" class="my-auto">
                            <font-awesome-icon icon="fa-solid fa-trash" class="icon" @click="deleteContent(post._id)" />
                        </div>
                        <div v-if="currentUser" class="my-auto">
                            <div v-if="post.likes.includes(this.userId)" >
                                <font-awesome-icon icon="fa-solid fa-heart" class="my-auto icon icon-heart like" @click="likeContent(post._id)" /> {{post.likes.length}}
                            </div>
                            <div v-else>
                                <font-awesome-icon icon="fa-solid fa-heart" class="my-auto icon icon-heart" @click="likeContent(post._id)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios';
import SearchBoxUser from './SerchBox.vue'
import {checkIfLogin, allSinglePosts, fetchSinglePost} from '@/mixins/mix.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faHeart)

    export default {
        name: 'HeaderHomePage',
        components: {
            FontAwesomeIcon,
            SearchBoxUser
        },
        mixins:[checkIfLogin, allSinglePosts],
        data() {
            return {
                // posts: [],
                // username:'',
                // currentUser:'',
                // userId:'', 
        }
    },
    async created(){
        // this.getProfile(this.$route.params.username);
        // this.currentUser = (await axios.get(`/user/signin`)).data.session.passport.user;
        // console.log(this.currentUser)

        
        // const user = await axios.get(`/user/signin`)
        // this.currentUser = user.data.session.passport.user;
        this.userIsLogin()
        // this.fetchSinglePost()
        // this.userId = user.data.user._id
        // console.log(user.data.user)
    },
    async mounted(){
        this.fetchData()
    },
    methods:{
        async fetchData(){
            try{
                const res = await axios.get('/singlecontent/publications')
                this.posts = res.data
                console.log(res)
            } catch(err){
                console.log(err)
            }
        },
        navigateToAllPosts(){
            this.$router.push({name: 'Home'});
        },
        // async deleteContent(id){
        //     try{
        //         const res = await axios.delete(`/singlecontent/delete/${id}`)
        //         this.$router.push('/content')
        //     } catch(err){
        //         console.log(err)
        //     }
        // },
        // async likeContent(postId){
        //     const res = await axios.post(`/singlecontent/like/${postId}`)
        //     this.$router.go(0)
        //     console.log(res)
        // }
        }
    }

</script>

<style scoped>

.cursor{
    cursor: Pointer;
}

.icon{
    height: 2rem;
    cursor:pointer;
}

.icon-heart:hover, .icon:hover{
    color: red;
}
.like{
    color:red
}

</style>


