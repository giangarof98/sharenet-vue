<template>
    <div class="flex justify-center mt-10">
        <form class="flex flex-col justify-center w-72 p-4">
            <p class="text-center text-xl py-3 font-semibold">Sign In</p>
            <label for="email" class="font-semibold text-lg">Email</label>
            <input type="text" id="email" name="email" class="border rounded py-0.9 px-1 focus:outline-none">

            <label for="password" class="font-semibold text-lg">Password</label>
            <input type="text" id="password" name="password" class="border rounded py-0.9 px-1 focus:outline-none">

            <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Sign In</button>
        </form>

    </div>
</template>

<script>

//import Navbar from '@/components/Navbar'

export default {
    name:'SignInForm',
    data(){
        return {
            user: {
                
            }
        }
    }
}

</script>