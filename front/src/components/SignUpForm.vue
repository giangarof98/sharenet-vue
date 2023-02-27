<template>
    <div class="flex flex-row justify-center mt-10">
        <div>
            <form @submit.prevent="createUser" class="flex flex-col justify-center w-72 p-4 italic">
                
                <p class="text-center text-xl font-semibold py-3">Sign Up</p>

                <label for="firstName" class="font-semibold text-lg">First Name</label>
                <input type="text" id="firstName" name="firstName" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.firstName" required />

                <label for="lastName" class="font-semibold text-lg">Last Name</label>
                <input type="text" id="lastName" name="lastName" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.lastName" required />

                <label for="username" class="font-semibold text-lg">Username</label>
                <input type="text" id="username" name="username" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.username" required minLength="3" />

                <label for="email" class="font-semibold text-lg">Email</label>
                <input type="email" id="email" name="email" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.email" required />

                <label for="password" class="font-semibold text-lg">Password</label>
                <input type="password" id="password" name="password" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.password" required minLength="8" />
                
                <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2"> Sign Up </button>
            </form>
            <div class="text-center">
                <a>You have an account? <router-link class="click-here" to="/user/signin">Click Here</router-link></a>
            </div>

        </div>

    </div>
</template>

<script>
import {signUp} from '@/mixins/mix.js'

export default {
    name:'SignUpForm',
    mixins:[signUp],
}

</script>

<style scoped>
.click-here{
    color: green;
}
</style>