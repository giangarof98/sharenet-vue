<template>
    <Navbar/>
    <SignInForm/>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import SignInForm from '@/components/SignInForm.vue'

export default {
  name: 'SignIn',
  components: {
    Navbar,
    SignInForm
  }
}

</script>