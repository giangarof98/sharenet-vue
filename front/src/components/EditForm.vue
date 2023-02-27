<template>
    <div class="flex flex-row justify-center mt-8">
        <form @submit.prevent="updatePost" class="flex flex-col justify-center w-72 p-4 bg-bgPic rounded-lg" enctype="multipart/form-data">
                    <p class="py-3 text-xl font-semibold text-center">Modify Post</p>

                    <img :src="imageUrl" alt="image">
                    <textarea type="text" placeholder="jjj" class="border rounded py-0.9 px-1 focus:outline-none italic" v-model="post.description"></textarea>

                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Update</button>
                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2 bg-edit">
                        <router-link :to="`/content/${post._id}`">
                            Go back
                        </router-link>
                    </button>
            </form>

    </div>
</template>

<script>
import {editPost} from '@/mixins/mix.js'

export default {
    name:'EditForm',
    data(){
        return{
            post:[],
            imageUrl: ''
        }
    },
    mixins:[editPost],
    
}
</script>