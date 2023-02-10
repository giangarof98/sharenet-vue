<template>
    <Navbar />
    <ProfileUser />
</template>

<script>
import Navbar from '@/components/Navbar';
import ProfileUser from '@/components/ProfileUser'
export default {
    name:'Profile',
    components: {
        Navbar,
        ProfileUser
    }
}
</script>