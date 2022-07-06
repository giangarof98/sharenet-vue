<template>
    <div class="flex flex-row justify-center mt-8">
       <div class="p-5">
            <div>
                <p class="font-semibold text-lg">{{post.description}}</p>
                <p class="font-semibold text-lg">{{post.image}}</p>
            </div>
            <div class="flex flex-row justify-between gap-x-5">
                    <button @click="remove(post._id)" class="font-semibold text-lg bg-button rounded p-1 text-white mt-2 bg-danger">Delete</button>
                    <router-link to="/edit/{{post._id}}">
                        <button class="font-semibold text-lg bg-button rounded p-1 text-white mt-2 bg-edit">Edit</button>
                    </router-link>
            </div>

       </div>
        
    </div>
</template>

<script>
import API from './requests'
export default {
    name:'SingleContent',
    data(){
        return {
            post: {}
        }
    },
    async created(){
        const res = await API.getOne(this.$route.params.id);
        this.post = res;
    },
    methods: {
        async remove(id){
            const res = await API.delete(id);
            this.$router.push({name: 'Home', params: {message: res}})
        }
    }
}
</script>