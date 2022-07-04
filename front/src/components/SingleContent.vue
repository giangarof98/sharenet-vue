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
    }
}
</script>