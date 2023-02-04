<template>
        <div v-if="review.length >= 1">

            <div v-for="r in review" :key="r.id">
                {{r.body}}
                <button @click="deleteReview(r._id)">
                    <font-awesome-icon icon="fa-solid fa-trash" class="icon-trash"/>
                </button>
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
            review:[]
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        async fetchData(){
            const id = this.$route.params.id
            const res = await axios.get(`/content/${id}/reviews`)
            this.review = res.data
            console.log(res.data)
        },
        async deleteReview(id){
            try{
                const idContent = this.$route.params.id
                const del = await axios.delete(`/content/${idContent}/reviews/${id}`)
                console.log(del)
                this.$router.go(0)

            } catch(err){
                console.log(err)
            }
        }
    }

}
</script>