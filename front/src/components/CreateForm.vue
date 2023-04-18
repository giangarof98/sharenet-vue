<template>

    <a class="flex justify-center mt-10 italic text-xl font-semibold cursor-pointer" @click="navigateToSinglePost">Create Post without image </a>
    <div class="flex justify-center mt-10">
        <form @submit.prevent="upload" 
                class="flex flex-col justify-center w-1/2 p-5 bg-bgPic rounded-lg form" 
                enctype="multipart/form-data">

                    <p class="py-3 text-xl font-semibold text-center">New Post</p>

                    <div class="w-1/2 m-auto text-center inner">
                        <label class="text-lg font-semibold italic">Write a post</label>
                        <textarea type="text" placeholder="What are yoy thinking?" 
                                class="border rounded py-0.9 px-1 focus:outline-none italic w-full m-auto" 
                                v-model="post.description" required maxlength="20">
                        </textarea>
                    </div>

                    <div class="w-1/2 m-auto text-center inner">
                        <label class="text-lg font-semibold italic">Upload image</label>
                        <input type="file" ref="photo" @change="selectFile" 
                            class="border rounded py-0.9 px-1 focus:outline-none w-full m-auto" 
                            required accept=".png, .jpg, .jpeg"/>
                    </div>

                    <button class="text- center font-semibold text-lg bg-button rounded p-1 text-white mt-2 w-1/2 m-auto btn">
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

<style scoped>
@media (max-width: 468px){

    form{
        width: 100%;
        border-radius: 0%;
        margin: 0;
        padding: 0;
    }

    .inner{
        width: 90%;
        margin: auto;
        padding: 20px 0 20px 0;
    }

    .btn{
        width: 90%;
        margin: 20px auto 20px auto;
    }

}

@media (min-width: 468px) and (max-width:768px){
    form{
        width: 90%;
    }

    .inner{
        width: 90%;
        margin: auto;
        padding: 20px 0 20px 0;
    }

    .btn{
        width: 90%;
        margin: 20px auto 20px auto;
    }
}
</style>