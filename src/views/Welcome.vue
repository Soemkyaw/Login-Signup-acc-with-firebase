<template>
  <div class="container">
    <div v-if="showLoginForm">
      <Login @enterChannel="enterChannel"></Login>
      <p>Don't have an account? <span @click="showLoginForm=!showLoginForm">Sign up</span></p>
    </div>
    <div v-if="!showLoginForm">
      <Signup @enterChannel="enterChannel"></Signup>
      <p>Have an account already? <span @click="showLoginForm=!showLoginForm">Log in</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { useRouter } from 'vue-router'

export default {
  components: { Login, Signup },
  setup() {
    let showLoginForm = ref(true)
    let router = useRouter()

    let enterChannel = ()=>{
      router.push({name:"Channel"})
    }

    return {showLoginForm,enterChannel}
  }
}
</script>

<style>

</style>