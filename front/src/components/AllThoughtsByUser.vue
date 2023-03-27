<template>

    <HeaderProfileUser/>

    <div class='text-center'>
        <a @click="navigateToUserProfile" class="font-semibold italic text-xl" id="singlePost">See posts</a>
    </div>

    <div class="flex flex-row my-6">
        <div class="w-6/12 text-center mx-auto this">
            <div v-for="dsc in description" :key="dsc._id" class="my-5">
                <div class="bg-bgPic rounded flex justify-evenly my-auto">
                    <font-awesome-icon icon="fa-solid fa-trash" class="my-auto icon" @click="deleteContent(dsc._id)"/>
                    <div>
                        <p class="italic font-semibold text-xl">{{username}}</p>
                        <p class="italic text-lg">{{dsc.description}}</p>
                    </div>
                    <font-awesome-icon icon="fa-solid fa-heart" class="my-auto icon icon-heart" />
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import HeaderProfileUser from './HeaderProfile.vue';
import {allSinglePostsByUser} from '@/mixins/mix.js'

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
    mixins:[allSinglePostsByUser],
    // async created(){
    //     this.getProfile(this.$route.params.username);
    // },
    // methods:{
    //     navigateToUserSettings(){
    //         this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
    //     },
    //     navigateToUserProfile(){
    //         this.$router.push({name: 'Profile', params: {username: this.username}});
    //     },
    // }
}

</script>

<style scoped>

#singlePost{
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