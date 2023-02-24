<template>

    <a class="flex justify-center mt-10 italic text-xl font-semibold cursor-pointer" @click="navigateToPost">Create Post with image </a>
    <div class="flex justify-center mt-10">
        <form @submit.prevent="upload" 
                class="flex flex-col justify-center w-72 p-4 bg-bgPic rounded-lg">

                    <p class="py-3 text-xl font-semibold text-center">Create Content</p>

                    <label class="text-lg font-semibold">What are you thinking?</label>
                    <textarea type="text" placeholder="What are yoy thinking?" 
                            class="border rounded py-0.9 px-1 focus:outline-none" 
                            v-model="singleDescription" required>
                    </textarea>

                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">
                        Create
                    </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import {createPostWithoutImage} from '@/mixins/mix.js'

export default {
    name:'CreateForm',
    // data(){
    //     return {
    //         singleDescription:'',
    //         username:''

    //     };
    // },
    mixins:[createPostWithoutImage],
    methods: {
        // async upload(){
        //     try{
        //         const description = {
        //             description: this.singleDescription
        //         }
        //         const res = await axios.post('/singlecontent', description);
        //         this.$router.push({name: 'Home'})
        //         console.log(res)

        //     } catch(err){
        //         console.log(err)
        //     }
        // },
        async navigateToPost(){
            this.$router.push({name: 'Create'});
        }
    }
}

</script>