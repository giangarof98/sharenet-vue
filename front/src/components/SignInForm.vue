<template>
    <div class="flex justify-center mt-10">
        <div>
            <form v-on:submit.prevent="signin"
                class="flex flex-col justify-center w-72 p-4 italic">
                <p class="text-center text-xl py-3 font-semibold">Sign In</p>

                <label for="username" class="font-semibold text-lg">Username</label>
                <input type="text" id="username" name="username" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.username"/>

                <label for="password" class="font-semibold text-lg">Password</label>
                <input type="password" id="password" name="password" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.password"/>

                <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Sign In</button>
            </form>

            <div class="text-center">
                <h3>Don't have an account? <router-link class="click-here" to="/user/signup">Click Here</router-link></h3>
            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'SignInForm',
    data(){
        return {
            user: {
                username:'',
                password:''
            },
        }
    },
    methods: {
        async signin(){
            try{
                const res = await axios.post('/user/signin', {
                    username:  this.user.username,
                    password:  this.user.password,
                });
                // console.log(res)
                this.$router.push('/content')

            } catch(err){
                console.log(err)
            }

        }
    }
}

</script>

<style scoped>
    .click-here{
        color: green;
    }
</style>