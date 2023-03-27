<template>
    <div v-if="currentUser">
        <SearchBoxUser/>
    </div>
    
    <div class="text-center my-6">
        <a @click="navigateToAllPosts" class="cursor text-xl">All Posts</a>
    </div>

     <div class="flex flex-row my-6">
        <div class="w-6/12 text-center mx-auto this">
            {{successMessage[0]}}
            <div v-for="post in posts" :key="post._id" class="my-5">
                <div class="bg-bgPic rounded flex justify-around my-auto small">
                    <div class="top-info">
                        <p class="italic font-semibold text-xl">{{post.author.username}}</p>
                        <p class="italic text-lg">~{{post.description}}</p>
                    </div>
                    <div class="flex gap-5 btns">
                        <div v-if="currentUser === post.author.username" class="my-auto">
                            <font-awesome-icon icon="fa-solid fa-trash" class="icon" @click="deleteContent(post._id)" />
                        </div>
                        <div v-if="currentUser" class="my-auto">
                            <div v-if="post.likes.includes(this.userId)" >
                                <font-awesome-icon icon="fa-solid fa-heart" class="my-auto icon icon-heart like" @click="likeContent(post._id)" />
                            </div>
                            
                            <div v-else>
                                <font-awesome-icon icon="fa-solid fa-heart" class="my-auto icon icon-heart" @click="likeContent(post._id)" />
                            </div>
                            {{post.likes.length}}
                        </div>
                        <div v-else class="my-auto">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-heart" class="my-auto icon icon-heart" /> {{post.likes.length}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import SearchBoxUser from './SerchBox.vue'
import {checkIfLogin, allSinglePosts} from '@/mixins/mix.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faHeart)

export default {
    name: 'HeaderHomePage',
    components: {
        FontAwesomeIcon,
        SearchBoxUser
    },
    mixins:[checkIfLogin, allSinglePosts],
    async created(){
        // From the CheckIfLogin()
        // calling the userIsLogin()
        // to display the heart and trah btns
        this.userIsLogin()
    },
}

</script>

<style scoped>

.cursor{
    cursor: Pointer;
}

.btns{
    gap: 1.4rem;
}

.icon{
    height: 2rem;
    cursor:pointer;
}

.icon-heart:hover, .icon:hover{
    color: red;
}
.like{
    color:red
}

@media (max-width: 468px){
    .this{
        width: 100%;
    }

    .small{
        display: flex;
        flex-direction: column;
    }

    .top-info{
        padding: 5px;
    }

    .btns{
        margin: auto;
        padding: 5px 0 5px 0;
    }
}

</style>


