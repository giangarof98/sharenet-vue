<template>
    <div class="flex justify-center mt-10">
        
        <form @submit.prevent="upload" class="flex flex-col justify-center w-72 p-4" enctype="multipart/form-data">
                <p class="py-3 text-xl font-semibold text-center">Create Content</p>

                    <h3 class="text-lg font-semibold">What are you thinking?</h3>
                    <textarea type="text" placeholder="What are yoy thinking?" class="border rounded py-0.9 px-1 focus:outline-none" v-model="post.description" required></textarea>

                    <h3 class="text-lg font-semibold">Upload image</h3>
                    <input type="file" ref="photo" @change="selectFile" class="border rounded py-0.9 px-1 focus:outline-none" required accept=".png, .jpg, .jpeg"/>

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
                description:'',
                image: '',
            },
            //image:'',
        };
    },
    methods: {
        selectFile(){
            this.post.image = this.$refs.photo.files[0];
            
            
        
            //console.log(file)
            //this.image = this.image.name
            //const filename = this.file.name
            //console.log(this.image.name)
            //console.log(file)
            //console.log(this.$refs.photo.files[0])
            
        },
        async upload(){
            const formData = new FormData();
            formData.append('images', this.post.image);
            formData.append('description', this.post.description);
            // try{
            //     await axios.post('http://localhost:3000/content', formData)
            // } catch(err){
            //     console.log(err)
            // }
            const res = await API.create(formData);
            //console.log(res)
            this.$router.push('/')
            
            // if(this.$refs.form){
            // }
        },
    }
}

</script>