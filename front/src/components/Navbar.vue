<template>

    <!-- large screen -->
    <nav class="flex flex-row justify-between bg-navbar py-6">
        <div>
            <img :src="require('../../public/vue-logo.png')" class="justify-start mx-5" alt="">
        </div>
        <div class="flex items-center gap-7 mx-7">
            <div class="hidden md:flex flex-row text-lg space-x-5">
                <div v-if="user.username" class="flex-row justify-center space-x-4 text-white text-2xl">
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

                <div v-if="!user.username" class="text-white space-x-5">
                    <router-link to="/user/signin">SignIn</router-link>
                    <router-link to="/user/signup">SignUp</router-link>
                </div>
            </div>

            <!-- Device Dropdown -->
            <div class="flex flex-col sm:items-center">
                <button @click="dropdown()" id="btn-menu" class="icon md:hidden focus:outline-none">
                        <span class="top"></span>
                        <span class="middle"></span>
                        <span class="bottom"></span>
                </button>

                <div class="md:hidden">
                    <div id="menu" class="flex-col hidden text-white space-y-2 px-2">
                        <div v-if="user.username" class="flex-row justify-center space-x-6 text-2xl">
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
                        <div v-if="!user.username">
                            <router-link to="/user/signin">SignIn</router-link>
                            <router-link to="/user/signup">SignUp</router-link>

                        </div>
                    </div>
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
.icon{
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: relative;
    transition: all 0.25s;
}

.top, .middle, .bottom{
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 1.5px;
    background: #000;
    transform: rotate(0);
    transition: all 0.5s;
    
}

.middle{
    transform: translateY(7px);
}

.bottom{
    transform: translateY(14px);
}

.open{
    transform: rotate(90deg);
    transform: translateY(0px);
}

.open .top{
    transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .middle{
    display: none;
}

.open .bottom{
    transform: rotate(-45deg) translateY(6px) translate(-6px);
}
</style>

