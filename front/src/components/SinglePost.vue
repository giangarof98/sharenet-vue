<template>

    <a class="flex justify-center mt-10 italic text-xl font-semibold cursor-pointer" @click="navigateToPost">Create Post with image </a>
    <div class="flex justify-center mt-10">
        <form @submit.prevent="upload" 
                class="flex flex-col justify-center w-1/2 p-4 bg-bgPic rounded-lg form">

                    <p class="py-3 text-xl font-semibold text-center">Create Content</p>
                    <div class="inner text-center">

                        <label class="text-lg font-semibold">What are you thinking?</label>
                        <textarea type="text" placeholder="What are yoy thinking?" 
                                class="border rounded py-0.9 px-1 focus:outline-none w-full" 
                                v-model="singleDescription" required>
                        </textarea>
                    </div>

                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">
                        Create
                    </button>
        </form>
    </div>
</template>

<script>
import {createPostWithoutImage} from '@/mixins/mix.js'

export default {
    name:'CreateForm',
    mixins:[createPostWithoutImage],
    // methods: {
    //     async navigateToPost(){
    //         this.$router.push({name: 'Create'});
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

    button{
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

    button{
        width: 90%;
        margin: 20px auto 20px auto;
    }

}
</style>