<template>
    <Navbar/>
    <EditForm/>
    
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import EditForm from '@/components/EditForm.vue'

export default {
    name:'Edit',
    components: {
        Navbar,
        EditForm
    }

}
</script>