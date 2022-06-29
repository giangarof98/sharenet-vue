<template>
    <Navbar/>
    <SingleContent/>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SingleContent from '@/components/SingleContent.vue'

export default {
    name: 'Content',
    components: {
        Navbar,
        SingleContent
    }
}
</script>