<template>
    <Navbar/>
    <SingleUserPosts/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SingleUserPosts from '@/components/AllThoughtsByUser.vue'

export default {
    name:'SinglePostsByUser',
    components: {
        Navbar,
        SingleUserPosts
    }

}
</script>