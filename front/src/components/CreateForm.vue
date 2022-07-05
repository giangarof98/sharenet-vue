<template>
    <div class="flex justify-center mt-10">
        
        <form @submit.prevent="createPost" class="flex flex-col justify-center w-72 p-4" enctype="multipart/form-data">
                <p class="py-3 text-xl font-semibold text-center">Create Content</p>

                <label for="description" class="text-lg font-semibold">What are you thinking?</label>
                <input name="description" placeholder="What are yoy thinking?" id="description" class="border rounded py-0.9 px-1 focus:outline-none" v-model="post.description" required/>

                <label for="image" class="text-lg font-semibold">Upload image</label>
                <input name="image" placeholger="type here" id="image" class="border rounded py-0.9 px-1 focus:outline-none" v-model="post.image" required/>

                <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Create</button>
        </form>

    </div>
</template>

<script>
import API from './requests.js';

export default {
    name:'CreateForm',
    data(){
        return {
            post: {
                description:'',
                image: '',

            },
        }
    },
    methods: {
        async createPost(){
            const form = new FormData();
            form.append('description', this.post.description);
            form.append('image', this.post.image);
            const response = await API.create(form);
            this.$router.push({name: 'Home', params: {message: response}})
            

        }
    }
}

</script>