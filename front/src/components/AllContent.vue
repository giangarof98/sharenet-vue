<template>

    <div v-if="currentUser">
        <SearchBoxUser/>
    </div>

    <div class="text-center my-6">
        <a @click="navigateToAllPublications" class="cursor italic text-xl">All Publications </a>
    </div>

    {{successMessage[0]}}

    <div class="grid grid-cols-3 gap-5 p-3 cards">
        <div v-for="post in posts.slice().reverse()" :key="post._id" class="cards">
            <div class="bg-bgPic rounded-lg img">
                <div>
                    <img :src="`${post.image[0].url}`" alt="content" class="w-full rounded-lg">
                </div>
                <div class="info">
                    <p class="text-center italic text-xl">{{post.author.username}}</p>
                    <p class="text-center italic">~{{post.description}}</p>
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
    // async created(){
    //     // From the CheckIfLogin()
    //     // calling the userIsLogin()
    //     // to display the heart and trah btns
    //     this.userIsLogin()
    // },
}
</script>

<style scoped>

.cursor{
    cursor: pointer;
}

@media (max-width: 468px){
    .cards{
        display: flex;
        flex-direction: column;
        padding: 0;
        border-radius: 0%;
    }

    img{
        border-radius: 0%;
    }

    .img{
        border-radius:0%;
        padding: 0;
        margin: 0;
    }

    .info > p{
        margin: 10px;
        text-align: left;
    }
}

@media (min-width: 468px) and (max-width:768px){
    .cards{
        /* display: grid; */
        grid-template-columns: repeat(2, 2fr);
    }

    .img{
        padding: 5px;
    }
}

</style>