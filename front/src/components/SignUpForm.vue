<template>
    <div class="flex justify-center mt-10">
        <form @submit.prevent="createUser" class="flex flex-col justify-center w-72 p-4">
            <p class="text-center text-xl font-semibold py-3">Sign Up</p>
            <label for="firstName" class="font-semibold text-lg">First Name</label>
            <input type="text" id="firstName" name="firstName" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.firstName">

            <label for="username" class="font-semibold text-lg">Username</label>
            <input type="text" id="username" name="username" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.username">


            <label for="email" class="font-semibold text-lg">Email</label>
            <input type="text" id="email" name="email" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.email">

            <label for="password" class="font-semibold text-lg">Password</label>
            <input type="password" id="password" name="password" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.password">

            <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Sign Up</button>
        </form>

    </div>
</template>

<script>
import API from './requests';

export default {
    name:'SignUpForm',
    data(){
        return {
            user: {
                firstName:'',
                username: '',
                email: '',
                password: '',
            }
        }
    },
    methods: {
        async createUser(){
            let form = new FormData()
            form.append('firstName', this.user.firstName);
            form.append('email', this.user.email);
            form.append('password', this.user.password)

            const res = await API.signup(this.user);
            console.log(res)
            this.$router.push('/')
        }
    }
}

</script>