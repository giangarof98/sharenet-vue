<template>
        <div v-if="review.length >= 1">
            <div v-for="r in review" :key="r.id">
                {{r.body}} {{r.author.username}}
                <div v-if="currentUser === r.author.username">
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
        console.log(this.currentUser)
    },
    methods:{
        async fetchData(){
            const id = this.$route.params.id
            const res = await axios.get(`/content/${id}/reviews`)
            this.review = res.data
            this.username = res.data.author
            // console.log(res.data)
        },
        async deleteReview(id){
            try{
                const idContent = this.$route.params.id
                const del = await axios.delete(`/content/${idContent}/reviews/${id}`)
                // console.log(del)
                this.$router.go(0)

            } catch(err){
                console.log(err)
            }
        }
    }

}
</script>