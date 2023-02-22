<template>

    <Navbar/>
    <HeaderHomePage/>

</template>

<script>

  import Navbar from '@/components/Navbar.vue'
  import HeaderHomePage from '@/components/AllSinglePosts.vue'
  export default {
    name: 'HomeSingleContent',
    components: {
      Navbar,
      HeaderHomePage
      
    }
  }
</script>
