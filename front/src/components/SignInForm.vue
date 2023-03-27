<template>
    <div class="flex justify-center mt-10 out">
        <div class="out">
            <form v-on:submit.prevent="signin"
                class="flex flex-col justify-center p-4 italic out">
                <p class="text-center text-xl py-3 font-semibold m-auto">Sign In</p>

                <label for="username" class="font-semibold text-lg">Username</label>
                <input type="text" id="username" name="username" class="border rounded py-0.9 px-1 focus:outline-none w-full" v-model="user.username"/>

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
import {signIn} from '@/mixins/mix.js'

export default {
    name:'SignInForm',
    mixins:[signIn],
}

</script>

<style scoped>
    .click-here{
        color: green;
    }

@media (max-width:768px){
    
    .out{
        width: 95%;
        margin: auto;
        /* margin: auto auto auto auto; */
    }

    form{
        widows: 100%;
        margin: auto;
    }

    input{
        width: 100%;
    }

}
</style>