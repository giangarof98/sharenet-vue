<template>

    <p class="text-center text-green-400 font-semibold my-4">
        {{successMessage[0]}}
    </p>

    <div class="flex flex-row justify-center mt-8">
       <div class="p-5">
            <div class="rounded-lg bg-bgPic this">
                <img :src="imageUrl" alt="content" class="rounded-lg"> 

                <div class="info">
                    <a @click="navigateToUserProfile" class=" font-semibold italic username">{{username}}</a>
                    <div class="inner">
                        <p class="font-semibold text-lg inner">~{{post.description}}</p>
                    </div>
                </div>
            </div>

            <button @click="likePost" class="w-full">
                <!-- like length -->
                <div v-if='liked.length == 0'>
                    <p>No likes yet; come back later...</p>
                </div>
                <div v-else>
                    {{liked.length}}
                </div>

                <!-- heart condition -->
                <div v-if="liked.includes(this.userId)">
                    <font-awesome-icon icon="fa-solid fa-heart" class="like icon-hearth"/>
                </div>
                <div v-else>
                    <font-awesome-icon icon="fa-solid fa-heart" class="icon-hearth"/>
                </div>
            </button>

            <div>
                <div v-if="currentUser === username" class="flex flex-row justify-between btns">
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
import {checkIfLogin, fetchContentById} from '@/mixins/mix.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHeart)

export default {
    name:'SingleContent',
    components:{
        FontAwesomeIcon
    },
    mixins: [checkIfLogin, fetchContentById],
    async created(){
        this.userIsLogin()        
    },
    // methods: {
    //     navigateToUserProfile(){
    //         this.$router.push({name: 'Profile', params: {username: this.username}});
    //     }
    // }
}
</script>

<style scoped>
.username{
    cursor: pointer;
}
.icon-hearth{
    height: 2.5rem;
}
.icon-hearth:hover{
    color: red;
}
.like{
    color:red
}

.info{
    padding: 5px;
}

.this{
    padding: 10px;
}

@media (max-width: 468px){
    a,p{
        padding: 5px;
    }

    .p-5{
        padding: 0;
    }

}

@media (max-width:767px){

    .btns{
        display: flex; flex-direction: column;
        
    }

    button{
        border-radius: 0%;

    }

    img{
        border-radius: 0;
    }

    .this{
        margin: 0;
        padding: 0;
        border-radius: 0%;
    }
}
</style>