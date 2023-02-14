<template>
        <div v-if="review.length >= 1">
            <div v-for="r in review" :key="r.id" class="flex justify-between py-4">
                <div class="italic">
                    <p class="font-semibold">{{r.author.username}}</p>
                    <p>{{r.body}}</p>
                </div>
                <div v-if="currentUser === r.author.username" class="text-xl">
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
    data(){
        return{
            review:{
                username: '',
            },
            currentUser: ''
        }
    },
    async created(){
        this.fetchData();
        this.currentUser = (await axios.get(`/user/signin`)).data.passport.user;
    },
    methods:{
        async fetchData(){
            const id = this.$route.params.id
            const res = await axios.get(`/content/${id}/reviews`)
            this.review = res.data
            this.username = res.data.author
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
</style>