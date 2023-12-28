import { ref } from "vue";
import { auth } from "@/firebase/config";

let error = ref(null)

let userAccLogin = async (email,password)=>{
    try {
        let res = await auth.signInWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error("Can't log in your account. Try again...")
        }
        return res
    } catch (err) {
        error.value = err.message
    }
}


let useLogIn = () => {
    return { error, userAccLogin }
}

export default useLogIn;