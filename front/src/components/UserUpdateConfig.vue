<template>

    <div class="flex flex-row justify-center">
        <form @submit.prevent="updateProfile" class="py-5 font-bold italic">
            <div class="bg-bgPic p-5 rounded-2xl out">
                <h2>Bio: <br> <textarea type="text" v-model="user.bio" cols="20" rows="3" class="p-1 rounded w-full"> </textarea></h2>

                <h2>Firstname: <br> <input type="text" v-model="user.firstName" class="p-1 rounded w-full"></h2>

                <h2>Lastname: <br> <input type="text" v-model="user.lastName" class="p-1 rounded w-full" ></h2>

                <button class="mt-3 p-3 bg-button text-white rounded font-bold w-full">Update Changes</button>

                <button @click="deleteAccount(id)" class="my-4 bg-danger text-white p-3 rounded font-bold w-full">Delete Account</button>
            </div>
        </form>
    </div>
    
</template>

<script>
import {userConfigurationPage} from '@/mixins/mix.js'

export default {
    name:'UserUpdate',
    mixins: [userConfigurationPage],
}
</script>

<style scoped>
input, textarea{
    outline: none;
}

@media (max-width: 768px){
    form{
        width: 100%;
    }
.out{
    width: 100%;
    border-radius: 0;
}
}
</style>