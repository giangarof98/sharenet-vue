<template>
    <div class="flex flex-row justify-center mt-8">
        <form @submit.prevent="updatePost" class="flex flex-col justify-center w-72 p-4" enctype="multipart/form-data">
                    <p class="py-3 text-xl font-semibold text-center">Modify Content</p>

                    <!-- <h3 class="text-lg font-semibold">Edit your description</h3> -->
                    <textarea type="text" placeholder="jjj" class="border rounded py-0.9 px-1 focus:outline-none" v-model="post.description"></textarea>

                    <img :src="imageUrl" alt="">

                    <!-- <h3 class="text-lg font-semibold">Replace image</h3>
                    <input name="image" ref="imageUrl" type="file" class="border rounded py-0.9 px-1 focus:outline-none"/> -->
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

import axios from 'axios'

export default {
    name:'EditForm',
    data(){
        return{
            post:[],
            imageUrl: ''
        }
    },
    async created(){
        this.fetchData(this.$route.params.id)
    },
    methods:{
        async fetchData(id){
            const res = await axios.get(`/content/${id}`)
            this.post = res.data;
            this.imageUrl = this.post.image[0].url;
            // console.log(res.data)
        },
        // uploadFile(){
        //     // this.file = this.$refs.file.files[0]
        //     // console.log(this.$refs.file.files[0])
        // },
        async updatePost(){
            let form = new FormData();
            form.append('description', this.post.description);
            form.append('image', this.post.image);
            
            const res = await axios.put(this.$route.params.id, this.post);
            this.$router.push('/content')
        }
    }

    
}
</script>