<template>
    <div class="flex justify-center mt-10">
        <form @submit.prevent="upload" 
                class="flex flex-col justify-center w-72 p-4" 
                enctype="multipart/form-data">

                    <p class="py-3 text-xl font-semibold text-center">Create Content</p>

                    <label class="text-lg font-semibold">What are you thinking?</label>
                    <textarea type="text" placeholder="What are yoy thinking?" 
                            class="border rounded py-0.9 px-1 focus:outline-none" 
                            v-model="post.description" required>
                    </textarea>

                    <label class="text-lg font-semibold">Upload image</label>
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
import axios from 'axios';

export default {
    name:'CreateForm',
    data(){
        return {
            post:{
                description:'',
                image: '',
            },

        };
    },
    methods: {
        selectFile(){
            this.post.image = this.$refs.photo.files[0];
            
        },
        async upload(){
            try{
                const formData = new FormData();
                formData.append('images', this.post.image);
                formData.append('description', this.post.description);
                const res = await axios.post('/content', formData);
                this.$router.push('/content')
                console.log(res)

            } catch(err){
                console.log(err)
            }
        },
    }
}

</script>