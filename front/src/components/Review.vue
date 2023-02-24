<template>
    <div>
        <form @submit.prevent="upload" class="flex flex-col py-8">

            <label class="text-center italic">Add Comment</label>
            <textarea 
                type="text" cols="30" rows="3"
                class="bg-grey rounded focus:outline-none p-3"
                placeholder="Leave your comment"
                v-model="review.body" required>
            </textarea>
            <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Comment</button>
        </form>
    </div>
    <ReviewBox/>
</template>

<script>
import axios from 'axios';
import ReviewBox from './reviewsBox.vue'

export default {
    name:'Review',
    components:{
        ReviewBox,
        //FontAwesomeIcon
    },
    data(){
        return{
            review:{
                body:''
            }
        }
    },
    methods: {
        upload(){
            this.createReview()
        },
        async createReview(){
            try{
                const id = this.$route.params.id;
                const res = await axios.post(`/content/${id}/reviews`, {
                    body: this.review.body
                });
                console.log(res);
                this.$router.go(0)

            } catch(err){
                console.log(err)
            }

        }
    }
    
}
</script>