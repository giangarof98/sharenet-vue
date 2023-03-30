<template>

    <p class="text-center text-green-400 font-semibold">
        {{successMessage[0]}}
    </p>

    <HeaderProfileUser/>

    <div class='text-center'>
        <a @click="navigateToUserProfile" class="font-semibold italic text-xl" id="singlePost">See posts with no image</a>
    </div>

    <AllPosts/>

</template>

<script>
import AllPosts from './AllPostsByUser.vue'
import HeaderProfileUser from './HeaderProfile.vue'
import {checkIfLogin, profileUser} from '@/mixins/mix.js'

export default {
    name: "ProfileUser",
    components: {
        AllPosts,
        HeaderProfileUser
    },
    mixins:[checkIfLogin, profileUser],
    async created(){
        this.userIsLogin()        
    },
    // methods:{
    //     navigateToUserSettings(){
    //         this.$router.push({name: 'UserUpdateConfig', params: {username: this.username}});
    //     },
    // }
}
</script>

<style scoped>

#singlePost{
    cursor: Pointer;
}

</style>