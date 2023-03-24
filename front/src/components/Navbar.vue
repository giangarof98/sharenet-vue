<template>

    <nav class="flex flex-row justify-between bg-navbar py-6">
            <div>
                <img :src="require('../../public/vue-logo.png')" class="justify-start mx-5" alt="">
            </div>
            <div class="flex items-center gap-7 mx-7">
                <div class="flex flex-row text-lg space-x-5">
                    <div v-if="user.username" class="flex-row justify-center space-x-4 text-white text-2xl options">
                        <router-link to="/content">
                            <font-awesome-icon icon="fa-solid fa-globe" />
                        </router-link>
                        <router-link :to="`/profile/${user.username}`">
                            <font-awesome-icon icon="fa-solid fa-user" />
                        </router-link>
                        <router-link to="/create">
                            <font-awesome-icon icon="fa-solid fa-plus" />
                        </router-link>
                        <button>
                            <a @click="logout">
                                <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                            </a>
                        </button>
                    </div>

                    <div v-if="!user.username" class="text-white space-x-5 options">
                        <router-link to="/user/signin">SignIn</router-link>
                        <router-link to="/user/signup">SignUp</router-link>
                    </div>
                </div>
            </div>
    </nav>
</template>

<script>

import {navbar, checkIfLogin} from '@/mixins/mix.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHome, faUser, faRightFromBracket, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHome, faUser, faRightFromBracket, faPlus, faGlobe)

export default {
    name:'Navbar',
    components:{
        FontAwesomeIcon
    },
    mixins:[navbar, checkIfLogin],
}

</script>

<style scoped>

@media (max-width:480px){
    nav{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        margin-bottom: 0;
    }
    .options{
        padding-top: 20px;
    }
    
}
</style>

