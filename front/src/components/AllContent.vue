<template>
    <div>
        <div v-for="post in posts" :key="post._id" class="flex flex-row justify-center py-6">
            <div>
                <div>
                    <p>{{post.description}}</p>
                    <img :src="`${post.image[0].url}`" alt="content">
                </div>
                <div>
                    <button class="font-semibold text-lg rounded p-1 text-white mt-2 bg-buttonSeeMore">
                        <router-link :to="`/content/${post._id}`">
                            See more
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
    name: 'AllContent',
    data() {
        return {
            posts: [],
        }
    },
    async mounted(){
        this.fetchData()
    },
    methods:{
        async fetchData(){
            const res = await axios.get('/content')
            this.posts = res.data
            console.log(res.data)
        }
    }
}
</script>