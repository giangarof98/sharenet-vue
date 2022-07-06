<template>
    <div v-for="post in posts" :key="post._id"
        class="flex flex-row justify-center py-6">
        <div>
            <div>
                <p>{{post.description}}</p>
                <p>{{post._id}}</p>
            </div>
            <div>
                <router-link :to="{name: 'Content', params: {id: post._id}}">
                    <button class="font-semibold text-lg rounded p-1 text-white mt-2 bg-buttonSeeMore">
                        See more
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import API from './requests';

export default {
    name: 'AllContent',
    data() {
        return {
            posts: [],
        }
    },
    async created(){
        this.posts = await API.getAll();
    }
}
</script>