<template>
    <nav class="flex flex-row justify-between bg-navbar py-5">
        <div>
            <img :src="require('../../public/vue-logo.png')" class="justify-start mx-5" alt="">
        </div>
        <div class="flex flex-row justify-end gap-x-5 mx-5 text-lg text-white tracking-wide items-center">
            <a href="">Home Page</a>
            <a href="">Profile</a>
            <a href="">SignUp</a>
            <a href="">SignIn</a>
        </div>
    </nav>
</template>

<script>

export default {
    name:'Navbar'
}

</script>