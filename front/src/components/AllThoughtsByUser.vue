<template>

    <HeaderProfileUser/>

    <div class='text-center'>
        <a @click="navigateToUserProfile" class="font-semibold italic text-xl" id="singlePost">See posts</a>
    </div>

    <div class="flex flex-row my-6">
        <div class="w-6/12 text-center mx-auto">
            <div v-for="dsc in description" :key="dsc._id" class="my-5">
                <div class="bg-bgPic rounded flex justify-evenly my-auto">
                    <font-awesome-icon icon="fa-solid fa-trash" class="my-auto icon" />
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
import axios from 'axios';
import HeaderProfileUser from './HeaderProfile.vue';

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
    data(){
        return{
            description:[],
            username:''

        }
    },
    async created(){
        this.getProfile(this.$route.params.username);
        this.currentUser = (await axios.get(`/user/signin`)).data.session.passport.user;
    },
    methods:{
        navigateToUserSettings(){
            this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
        },
        async getProfile(username){
            const res = await axios.get(`/user/profile/${username}`)
            this.username = res.data.user.username;
            this.description = res.data.description;
            this.username = res.data.user.username;
            //console.log(res.data.user.username)
        },
        navigateToUserProfile(){
            this.$router.push({name: 'Profile', params: {username: this.username}});
        }
    }
}

</script>

<style scoped>

#singlePost{
    cursor: Pointer;
}

.icon{
    height: 2rem;
}

.icon-heart:hover{
    color: red;
}
.like{
    color:red
}

</style>