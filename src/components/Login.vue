<template>
  <form @submit.prevent="login">
        <div>
          <h2>Login Form</h2>
        </div>
        <input type="email" v-model="email" placeholder="Enter your email...">
        <input type="password" v-model="password" placeholder="Enter your password..">
        <div v-if="error">
            <small class="error">{{ error }}</small>
        </div>
        <button class="success">Login</button>
      </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from "../composable/useLogin"

export default {
    setup(props,context) {
        let email = ref("")
        let password = ref("")

        let {error,userAccLogin} = useLogin()

        let login = async() => {
            let res = await userAccLogin(email.value, password.value)
            console.log(error);
            if (res) {
                context.emit("enterChannel")
            }
        }

        return { email, password ,error,login}
    }
}
</script>

<style>
    .success{
        background-color: rgb(109, 191, 109);
        color: white;
    }
</style>