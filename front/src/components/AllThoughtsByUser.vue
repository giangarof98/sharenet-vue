<template>

    <HeaderProfileUser/>

    <div class='text-center'>
        <a @click="navigateToUserProfile" class="font-semibold italic text-xl" id="singlePost">See posts with image</a>
    </div>

    <div class="flex flex-row my-6">
        <div class="w-6/12 text-center mx-auto this">
            <div v-for="dsc in single.slice().reverse()" :key="dsc._id" class="my-5">
                <div class="bg-bgPic rounded flex flex-col my-auto">
                    <div>
                        <p class="italic font-semibold text-xl">{{username}}</p>
                        <p class="italic text-lg p-5">~{{dsc.description}}</p>
                    </div>
                    <div class="flex justify-center gap-5 btns">
                        <div v-if="currentUser === dsc.author.username">
                            <font-awesome-icon icon="fa-solid fa-trash" class="my-auto icon" @click="deleteContent(dsc._id)"/>
                        </div>
                        <div v-if="currentUser">
                            <div v-if="dsc.likes.includes(this.userId)" >
                                <font-awesome-icon icon="fa-solid fa-heart" class="icon icon-heart like" @click="likeContent(dsc._id)" />
                            </div>
                            
                            <div v-else>
                                <font-awesome-icon icon="fa-solid fa-heart" class="icon icon-heart" @click="likeContent(dsc._id)" />
                            </div>
                            {{dsc.likes.length}}
                        </div>
                        <div v-else class="my-auto">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-heart" class="my-auto icon icon-heart" /> {{dsc.likes.length}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import HeaderProfileUser from './HeaderProfile.vue';
import {allSinglePostsByUser, checkIfLogin} from '@/mixins/mix.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faHeart)

export default {
    name: 'SingleUserPosts',
    components: {
        HeaderProfileUser,
        FontAwesomeIcon
    },
    mixins:[allSinglePostsByUser, checkIfLogin],
    async created(){
        // From the CheckIfLogin()
        // calling the userIsLogin()
        // to display the heart and trash btns
        this.userIsLogin()
    },
}

</script>

<style scoped>

#singlePost, .fa-heart{
    cursor: Pointer;
}

.icon{
    height: 2rem;
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