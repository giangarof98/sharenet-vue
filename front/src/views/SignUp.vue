<template>
    <Navbar/>
    <SignUpForm/>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import SignUpForm from '@/components/SignUpForm.vue'

export default {
  name: 'SignIn',
  components: {
    Navbar,
    SignUpForm
  }
}

</script>