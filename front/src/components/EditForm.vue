<template>
    <div class="flex flex-row justify-center mt-8">
        <form @submit.prevent="updatePost" class="flex flex-col justify-center w-2/5 p-4 bg-bgPic rounded-lg form" enctype="multipart/form-data">
                    <p class="py-3 text-xl font-semibold text-center">Modify Post</p>

                    <img :src="imageUrl" alt="image" class="w-full rounded-lg">
                    <textarea type="text" placeholder="" 
                        class="border rounded py-2 px-1 focus:outline-none italic text-lg inner" 
                        v-model="post.description"></textarea>

                    <div class="flex flex-col btns">
                        <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Update</button>
                        <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2 bg-edit">
                            <router-link :to="`/content/${post._id}`">
                                Go back
                            </router-link>
                        </button>
                    </div>
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

<style scoped>

.inner{
    margin-top: 1.3rem;
}

@media (max-width: 468px){

    form{
        width: 100%;
        border-radius: 0%;
        margin: 0;
        padding: 0;
    }

    .inner{
        width: 90%;
                margin: 20px auto auto auto;

        /* margin: auto;
        padding: 20px 0 20px 0; */
    }

    .btns{
        width: 90%;
        margin: 20px auto 20px auto;
    }

    img{
        border-radius: 0%;
    }

}

@media (min-width: 468px) and (max-width:768px){
    form{
        width: 80%;
    }

}

</style>