<template>

    <Navbar/>
    <AllContent/>

</template>

<script>

  import Navbar from '@/components/Navbar.vue'
  import AllContent from '@/components/AllContent.vue';

  export default {
    name: 'Home',
    components: {
      Navbar,
      AllContent
    }
  }
</script>
