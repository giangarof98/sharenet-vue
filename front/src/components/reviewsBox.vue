<template>
        <div v-if="review.length >= 1">
            <div v-for="r in review" :key="r.id" class="flex justify-between py-4">
                <div class="italic">
                    <p class="font-semibold">{{r.author.username}}</p>
                    <p>{{r.body}}</p>
                </div>

                <div v-if="currentUser === r.author.username" class="text-xl">
                    <div v-if="r.likes.includes(r.author._id)">
                        <button @click="likeContent(r._id)">
                            <font-awesome-icon icon="fa-solid fa-heart" class="icon-hearth like"/> {{r.likes.length}}
                        </button>
                    </div>
                    <div v-else>
                        <button @click="likeContent(r._id)">
                            <font-awesome-icon icon="fa-solid fa-heart" class="icon-hearth"/>
                        </button>
                    </div>

                    <button @click="deleteReview(r._id)">
                        <font-awesome-icon icon="fa-solid fa-trash" class="icon-trash"/>
                    </button>
                </div>
            </div>
        </div>

        <div v-else>
            No comments yet. Be the first one to comment!
        </div>
</template>

<script>
import axios from 'axios';
import {checkIfLogin} from '@/mixins/mix.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faHeart)

export default {
    name:'reviewBox',
    components:{
        FontAwesomeIcon
    },
    mixins:[checkIfLogin],
    data(){
        return{
            review:{
                username: '',
                reviewId:''
            },
            currentUser: '',
            liked: []
        }
    },
    async created(){
        this.fetchData();
        this.userIsLogin()
        // this.currentUser = (await axios.get(`/user/signin`)).data.session.passport.user;
        
    },
    methods:{
        async likeContent(reviewId){
            const id = this.$route.params.id
            const response = await axios.post(`/content/${id}/like/${reviewId}`);
            this.$router.go(0)
        
        },
        async fetchData(){
            const id = this.$route.params.id
            const res = await axios.get(`/content/${id}/reviews`)
            this.review = res.data
            this.liked = res.data.likes
            //this.username = res.data.author
            //console.log(res.data)
        },
        async deleteReview(id){
            try{
                const idContent = this.$route.params.id
                const deleteReview = await axios.delete(`/content/${idContent}/reviews/${id}`)
                this.$router.go(0)

            } catch(err){
                console.log(err)
            }
        }
    }

}
</script>

<style scoped>
.icon-trash{
    color: red;
}

.icon-hearth:hover{
    color: red;
}
.like{
    color:red
}
</style>