<template>
        <p class="text-center text-green-400 font-semibold">
            {{successMessage[0]}}
        </p>
        
        <div v-if="review.length >= 1">
            <div v-for="r in review" :key="r.id" class="p-5 small-col box box-outer">
                <div class="italic box">
                    <p class="font-semibold">{{r.author.username}}</p>
                    <div class="outer inner-box">
                        <p class="m-small inner">~{{r.body}}</p>
                    </div>
                </div>

                <div class="flex gap-5 p-4">
                    <div v-if="currentUser === r.author.username" class="text-xl">
                        <button @click="deleteReview(r._id)">
                            <font-awesome-icon icon="fa-solid fa-trash" class="icon-trash"/>
                        </button>
                    </div>

                    <div v-if="currentUser">
                        <div v-if="r.likes.includes(this.userId)">
                            <font-awesome-icon icon="fa-solid fa-heart" class="icon-hearth like" @click="likeContent(r._id)" /> {{r.likes.length}}
                        </div>
                        <div v-else>
                            <font-awesome-icon icon="fa-solid fa-heart" class="icon-hearth" @click="likeContent(r._id)" />
                            {{r.likes.length}}
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div v-else class="text-center mb-5">
            No comments yet. Be the first one to comment!
        </div>
</template>

<script>
import {checkIfLogin, displayReviews} from '@/mixins/mix.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faHeart)

export default {
    name:'reviewBox',
    components:{
        FontAwesomeIcon
    },
    mixins:[checkIfLogin, displayReviews],
    async created(){
        this.fetchData();
        this.userIsLogin()
    },
}
</script>

<style scoped>
.icon-trash{
    color: red;
}

.icon-hearth{
    cursor: pointer;
}

.icon-hearth:hover{
    color: red;
}
.like{
    color:red
}

.inner-box{
    width: 50%;
}

.inner{
    overflow-wrap: break-word;
}



@media (max-width: 768px){

    .inner-box{
        width: 100%;
    }
    .inner{
        overflow-wrap: break-word;
    }
    
}

</style>