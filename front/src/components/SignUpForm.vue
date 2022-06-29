<template>
    <div class="flex justify-center mt-10">
        <form action="" class="flex flex-col justify-center w-72 p-4">
            <p class="text-center text-xl font-semibold py-3">Sign Up</p>
            <label for="firstName" class="font-semibold text-lg">First Name</label>
            <input type="text" id="firstName" name="firstName" class="border rounded py-0.9 px-1 focus:outline-none">

            <label for="email" class="font-semibold text-lg">Email</label>
            <input type="text" id="email" name="email" class="border rounded py-0.9 px-1 focus:outline-none">

            <label for="password" class="font-semibold text-lg">Password</label>
            <input type="text" id="password" name="password" class="border rounded py-0.9 px-1 focus:outline-none">

            <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2">Sign Up</button>
        </form>

    </div>
</template>

<script>

export default {
    name:'SignUpForm',
}

</script>