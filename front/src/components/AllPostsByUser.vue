<template>
    
    <div class="flex flex-row justify-center">
        <div class="md:grid grid-cols-3 w-full p-4 gap-3">
            <div v-for="post in posts.slice().reverse()" :key="post._id" class="p-4 bg-bgPic rounded-lg my-auto">
                <img :src="`${post.image[0].url}`" alt="content" class="w-full rounded-lg">
                <p class="text-center italic font-semibold text-xl">{{post.author.username}}</p>
                <div class="text-center italic font-semibold">{{post.description}}</div>
            </div>
        </div>
    </div>

</template>

<script>
import {getProfile} from '@/mixins/mix.js'

export default {
    name: 'AllPosts',
    mixins:[getProfile],
}
</script>