<template>
    <div class='flex flex-row justify-center my-6'>
        <div class='flex flex-col'>
            <input type="text" v-model="searchTerm" @input="searchUsers" placeholder="Search by username" class="rounded-lg border-4 focus:outline-none text-xl p-2">
            <div v-if="matchingUser" class='text-center py-6'> 
                    <a class="cursor-pointer text-xl" @click="goToProfile(matchingUser.username)"> 
                        {{ matchingUser.username}}
                    </a> 
            </div>
        </div>
    </div>
</template>

<script>
import {searchBox} from '@/mixins/mix.js'
export default {
    name:"SearchBoxUser",
    mixins:[searchBox],

}
</script>