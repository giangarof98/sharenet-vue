<template>
    <div class="flex flex-row justify-center mt-8">
       <div class="p-5">
            <p class="font-semibold text-lg">{{post.description}}</p>
            <p>{{username}}</p>
            <img :src="imageUrl" alt="content" > 
            <div class="flex flex-row justify-between gap-x-5">
                <div v-if="currentUser === username">
                    <button @click="deleteContent(post._id)" 
                            class="font-semibold text-lg bg-button rounded p-1 text-white mt-2 bg-danger">
                        Delete
                    </button>
                    <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2 bg-edit">
                        <router-link :to="`/content/edit/${post._id}`">
                            Edit
                        </router-link>
                    </button>

                </div>
            </div>
       </div> 
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'SingleContent',
    data(){
        return {
            post: [],
            imageUrl: '',
            username: '',
            currentUser: '',
        }
    },
    async created(){
        this.fetchData(this.$route.params.id);
        this.currentUser = (await axios.get(`/user/signin`)).data.passport.user;
        // console.log(this.currentUser)
    },
    methods: {
        async fetchData(id){
            try {
                const res = await axios.get(`/content/${id}`);
                this.post = res.data
                this.imageUrl = this.post.image[0].url;
                this.username = res.data.author.username
                console.log(res.data)
                // console.log(this.post)
            } catch (error) {
                console.log(error);
            }

        },
        async deleteContent(id){
            try{
                const res = await axios.delete(`/content/${id}`)
                this.$router.push('/content')
            } catch(err){
                console.log(err)
            }

        }
    }
}
</script>