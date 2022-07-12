<template>
    <div class="flex flex-row justify-center mt-10">
        <div>
            <vee-form @submit="createUser" :validation-schema="schema" class="flex flex-col justify-center w-72 p-4">
                
                <p class="text-center text-xl font-semibold py-3">Sign Up</p>

                <label for="firstName" class="font-semibold text-lg">First Name</label>
                <vee-field :rules="'required'" type="text" id="firstName" name="firstName" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.firstName" />
                <ErrorMessage class="text-red-600" name="firstName"/>

                <label for="username" class="font-semibold text-lg">Username</label>
                <vee-field :rules="'required'" type="text" id="username" name="username" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.username" />
                <ErrorMessage class="text-red-600" name="username"/>

                <label for="email" class="font-semibold text-lg">Email</label>
                <vee-field :rules="'required'" type="text" id="email" name="email" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.email" />
                <ErrorMessage class="text-red-600" name="email"/>

                <label for="password" class="font-semibold text-lg">Password</label>
                <vee-field :rules="'required'" type="password" id="password" name="password" class="border rounded py-0.9 px-1 focus:outline-none" v-model="user.password" />
                <ErrorMessage class="text-red-600" name="password"/>
                
                <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2"> Sign Up </button>
            </vee-form>
            <div class="text-center">
                <h3>You have an account? <router-link to="/signin">Click Here</router-link></h3>
            </div>

        </div>

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
            },
            schema: {
                firstName:'required|min:4|max:20',
                username: 'required|min:3|max:50',
                email: 'required|email|min:4|max:100',
                password: 'required|min:7|max:100',
            }

        }
    },
    methods: {
        async createUser(){
            let form = new FormData()
            form.append('firstName', this.user.firstName);
            form.append('username', this.user.username);
            form.append('email', this.user.email);
            form.append('password', this.user.password);
            
            const res = await API.signup(this.user);
            console.log(res)

            console.log(this.v$)

            this.$router.push('/')
        }
    },
}

</script>