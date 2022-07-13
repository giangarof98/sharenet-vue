<template>
    <div>
        <form @submit.prevent="createReview" class="flex flex-col py-8">
            <h3 class="text-center">Your New Comment</h3>
            <textarea type="text" name="review" cols="30" rows="3"
                class="bg-grey rounded focus:outline-none p-3" v-model="post.reviews" required>
            </textarea>
            
            <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Comment</button>

        </form>
    </div>
</template>

<script>
import API from './requests';

export default {
    name:'Review',
    data(){
        return{
            post: {
                id: this.$route.params.id,
                reviews: '',
            }
        }
    },
    async created(){
        const res = await API.getOne(this.$route.params.id);
        this.post = res;
    },
    methods: {
        async createReview(){
            let form = new FormData();
            form.append('review', this.post.reviews);

            const res = await API.createReview(this.$route.params.id, this.post.reviews)
            console.log(res.data)
        }
    }
    
}
</script>