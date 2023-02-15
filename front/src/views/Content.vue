<template>
        <Navbar/>
    <div class="flex justify-center">
        <div>
            <SingleContent/>
            <div v-if="currentUser">
                <Review/>
            </div>
            <div v-else>
                <h2>You are not loggedIn; please, signin or signup to leave a comment!</h2>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SingleContent from '@/components/SingleContent.vue';
import Review from '@/components/Review.vue';
import axios from 'axios';

export default {
    name: 'Content',
    components: {
        Navbar,
        SingleContent,
        Review
    },
    data(){
        return{
            currentUser: ''
        }
    },
    async created(){
        try{
            const user = await axios.get(`/user/signin`);
            this.currentUser = user.data.session.passport.user

        }catch(err){
            console.log('user is not signIn', err)
        }
        // console.log(this.currentUser)
    }
}
</script>