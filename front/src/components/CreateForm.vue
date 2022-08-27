<template>
    <div class="flex justify-center mt-10">
        
        <form @submit.prevent="upload" class="flex flex-col justify-center w-72 p-4" enctype="multipart/form-data">
                <p class="py-3 text-xl font-semibold text-center">Create Content</p>

                    <h3 class="text-lg font-semibold">What are you thinking?</h3>
                    <textarea type="text" placeholder="What are yoy thinking?" class="border rounded py-0.9 px-1 focus:outline-none" v-model="post.description" required></textarea>

                    <h3 class="text-lg font-semibold">Upload image</h3>
                    <input type="file" ref="file" placeholder="upload an image" class="border rounded py-0.9 px-1 focus:outline-none" @change="uploadFile" required/>

                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Create</button>
        </form>

    </div>
</template>

<script>
import API from './requests';

export default {
    name:'CreateForm',
    data(){
        return {
            post:{
                description:"",
                image: "",
            }
        }
    },
    methods: {
        uploadFile(){
            this.image = this.$refs.file[0];
            //this.file = file
            console.log(this.file = this.$refs.file[0])
            
        },
        async upload(){
            let form = new FormData();
            form.append('description', this.post.description);
            form.append('image', this.post.image);
            const res = await API.createPost(this.post);
            console.log(res.data)
            this.$router.push('/')

        },
    }
}

</script>