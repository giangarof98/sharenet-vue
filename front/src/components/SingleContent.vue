<template>
    <div>
        <button>
            <router-link to="/">HomePage</router-link>
        </button> <br>
        <button :to="{name: 'Update', params:{id: post._id }}">Edit</button>
    </div>
    <div>
        {{post.description}} <br>
        {{post.image}}
    </div>
    <div>
        <button @click="remove(post._id)">Delete</button>
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