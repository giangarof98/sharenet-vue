<template>
    <h1>Hello</h1>
</template>

<script>
import axios from 'axios';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHeart)

export default {
    name:'reviewBox',
    components:{
        FontAwesomeIcon
    },
    data(){
        return{
            reviews:[]
        }
    },
    created(){
        
    }

}
</script>