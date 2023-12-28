<template>
  <form @submit.prevent="signUp">
    <div>
      <h2>Sign Up Form</h2>
    </div>
    <input type="text" v-model="displayName" placeholder="Enter your display name...">
    <input type="email" v-model="email" placeholder="Enter your email...">
    <input type="password" v-model="password" placeholder="Enter your password..">
    <div v-if="error">
              <small class="error">{{ error }}</small>
          </div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignUp from "../composable/useSignUp"
export default {
  setup(props,context) {
    let displayName = ref("")
    let email = ref("")
    let password = ref("")

    let { error, createAcc } = useSignUp()
    
    let signUp = async () => {
      let res = await createAcc(email.value, password.value, displayName.value)
      if (res) {
        context.emit("enterChannel")
      }
    }

    return {displayName,email,password,signUp,error}
  }
}
</script>

<style>
  form{
    max-width: 460px;
    margin: 20px auto;
  }
  form div {
    text-align: center;
  }
  form div h2 {
    display: inline-block;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    border-bottom: 1px solid rgba(145, 87, 87, 0.474);
  }

  form input{
    display: block;
    width: 100%;
    margin: 20px 0px;
    padding: 20px;
    border-radius: 10px;
    border: none;
    border-bottom: 1px solid #a59f9f;
    /* border-top: 1px solid #d8d7d7; */
    outline: none;
    font-size: 15px;
    box-shadow: 1px 1px 1px rgba(145, 87, 87, 0.474);
    /* transition: all 1s ease-in-out; */
  }
  form button {
    display: block;
    margin: 20px auto;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: rgba(184, 111, 111, 0.474);
    box-shadow: 1px 1px 2px black;
    color: #555;
    border: none;
    cursor: pointer;
  }
</style>