<template>
        <div v-if="review.length >= 1">
            <div v-for="r in review" :key="r.id" class="flex justify-between py-4">
                <div class="italic">
                    <p class="font-semibold">{{r.author.username}}</p>
                    <p>{{r.body}}</p>
                </div>

                <div v-if="currentUser === r.author.username" class="text-xl">
                    <div v-if="r.likes.includes(r.author._id)">
                        <button @click="likeContent(r._id)">
                            <font-awesome-icon icon="fa-solid fa-heart" class="icon-hearth like"/> {{r.likes.length}}
                        </button>
                    </div>
                    <div v-else>
                        <button @click="likeContent(r._id)">
                            <font-awesome-icon icon="fa-solid fa-heart" class="icon-hearth"/>
                        </button>
                    </div>

                    <button @click="deleteReview(r._id)">
                        <font-awesome-icon icon="fa-solid fa-trash" class="icon-trash"/>
                    </button>
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

.icon-hearth:hover{
    color: red;
}
.like{
    color:red
}
</style>