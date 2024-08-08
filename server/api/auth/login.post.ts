import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/server/lib/firebase"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const user = await signInWithEmailAndPassword(auth, body.email, body.password)
        console.log("User logged in successfully");
        return {
            user: user,
            message: "Logged in successfully!"
        }
    }catch(error: any)
    {
        console.log("server error: ", error.code);
        let message;
        switch(error.code)
        {
            //auth/invalid-login-credentials
            default: message = "Invalid credentials"
        }
        
        throw createError({
            statusCode: 400,
            statusMessage: message
        })
    }
    
})