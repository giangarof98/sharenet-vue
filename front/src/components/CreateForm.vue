<template>

    <a class="flex justify-center mt-10 italic text-xl font-semibold cursor-pointer" @click="navigateToSinglePost">Create Post without image </a>
    <div class="flex justify-center mt-10">
        <form @submit.prevent="upload" 
                class="flex flex-col justify-center w-72 p-4 bg-bgPic rounded-lg" 
                enctype="multipart/form-data">

                    <p class="py-3 text-xl font-semibold text-center">New Post</p>

                    <label class="text-lg font-semibold italic">Write a post</label>
                    <textarea type="text" placeholder="What are yoy thinking?" 
                            class="border rounded py-0.9 px-1 focus:outline-none italic" 
                            v-model="post.description" required>
                    </textarea>

                    <label class="text-lg font-semibold italic">Upload image</label>
                    <input type="file" ref="photo" @change="selectFile" 
                        class="border rounded py-0.9 px-1 focus:outline-none" 
                        required accept=".png, .jpg, .jpeg"/>

                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">
                        Create
                    </button>
        </form>
    </div>
</template>

<script>
import {createPostWithImage} from '@/mixins/mix.js'

export default {
    name:'CreateForm',
    mixins:[createPostWithImage],
    // methods: {
    //     async navigateToSinglePost(){
    //         this.$router.push({name: 'CreateSingle'});
    //     }
    // }
}

</script>