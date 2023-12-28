import { ref } from "vue"
import { auth } from "@/firebase/config"

let error = ref(null)

let createAcc = async(email,password,displayName) => {
    try {
        let res = await auth.createUserWithEmailAndPassword(email, password)
        if (!res) {
          throw new Error("Could not sign up. Try again...")
        }
        res.user.updateProfile({displayName:displayName})
        return res
      } catch (err) {
        error.value = err.message
      }
}

let useSignUp = () => {
    return {error,createAcc}
}

export default useSignUp