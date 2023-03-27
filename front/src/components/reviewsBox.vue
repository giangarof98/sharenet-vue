<template>
        {{successMessage[0]}}
        <div v-if="review.length >= 1">
            <div v-for="r in review" :key="r.id" class="flex justify-between py-4 box-rev">
                <div class="italic p-4">
                    <p class="font-semibold">{{r.author.username}}</p>
                    <p>~{{r.body}}</p>
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

        <div v-else>
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

@media (max-width: 468px){
    /* .box-rev{
        padding: 30px;
    } */
    
}

</style>