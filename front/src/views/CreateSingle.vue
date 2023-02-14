<template>
    <Navbar/>
    <CreateSingle/>
    
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CreateSingle from '@/components/SinglePost.vue'

export default {
    name:'CreateOne',
    components: {
        Navbar,
        CreateSingle
    }

}
</script>