<template>

    <div v-if="currentUser">
        <SearchBoxUser/>
    </div>

    <div class="text-center my-6">
        <a @click="navigateToAllPublications" class="cursor italic text-xl">All Publications </a>
    </div>

    {{successMessage[0]}}

    <div class="grid grid-cols-3 gap-5 p-3">
        <div v-for="post in posts.slice().reverse()" :key="post._id">
            <div class="bg-bgPic rounded-lg">
                <div class="p-2">
                    <img :src="`${post.image[0].url}`" alt="content" class="w-full rounded-lg">
                </div>
                <p class="text-center italic text-xl">{{post.author.username}}</p>
                <p class="text-center italic">{{post.description}}</p>
                <div class="text-center p-2">
                    <button class="font-medium rounded-lg p-1.5 text-white mt-2 bg-buttonSeeMore">
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
import SearchBoxUser from './SerchBox.vue'
import {checkIfLogin, fetchPosts, signIn} from '@/mixins/mix.js'

export default {
    name: 'AllContent',
    components: {
        SearchBoxUser
        },
    mixins: [checkIfLogin, fetchPosts],
}
</script>

<style scoped>

.cursor{
    cursor: pointer;
}

</style>