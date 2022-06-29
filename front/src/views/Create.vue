<template>
    <Navbar/>
    <CreateForm/>
    
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CreateForm from '@/components/CreateForm.vue'

export default {
    name:'Create',
    components: {
        Navbar,
        CreateForm
    }

}
</script>