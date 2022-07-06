<template>
    <div class="flex flex-row justify-center mt-8">
        <form @submit.prevent="updatePost" class="flex flex-col justify-center w-72 p-4" enctype="multipart/form-data">
                    <p class="py-3 text-xl font-semibold text-center">Modify Content</p>

                    <h3 class="text-lg font-semibold">Edit your description</h3>
                    <textarea type="text" placeholder="What are yoy thinking?" class="border rounded py-0.9 px-1 focus:outline-none" v-model="post.description" required></textarea>

                    <h3 class="text-lg font-semibold">Replace image</h3>
                    <input name="image" type="text" placeholger="type here" class="border rounded py-0.9 px-1 focus:outline-none" v-model="post.image" required/>

                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Update</button>
            </form>

    </div>
</template>

<script>
import API from './requests'

export default {
    name:'EditForm',
    data(){
        return{
            post:{
                description: "",
                image: ""
            },
        }
    },
    async created(){
        const res = await API.getOne(this.$route.params.id)
        this.post = res
    },
    methods:{
        async updatePost(){
            let form = new FormData();
            form.append('description', this.post.description);
            form.append('image', this.post.image);
            const res = await API.update(this.$route.params.id, this.post);
            console.log(res.data)
            this.$router.push('/')
        }
    }

    
}
</script>