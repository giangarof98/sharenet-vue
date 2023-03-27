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
import ReviewBox from './reviewsBox.vue';
import {createReview} from '@/mixins/mix.js';

export default {
    name:'Review',
    components:{
        ReviewBox,
    },
    mixins:[createReview],
    
}
</script>

<style scoped>
@media (max-width:768px){

    button, textarea{
        border-radius: 0%;

    }
}
</style>