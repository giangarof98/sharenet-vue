<template>

    <Navbar/>
    <UserUpdateConfig/>
    
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import UserUpdateConfig from '@/components/UserUpdateConfig.vue'

export default {
    name:'UserUpdate',
    components: {
        Navbar,
        UserUpdateConfig
    }

}
</script>
