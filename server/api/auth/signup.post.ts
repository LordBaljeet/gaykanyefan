import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/server/lib/firebase"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        console.log("body: ", body);
        const user = await createUserWithEmailAndPassword(auth, body.email, body.password)
        return { user: user }
    }catch(error: any)
    {
        console.log("server error: ", error.code);
        
        throw createError({
            statusCode: 400,
            statusMessage: error.code
        })
    }
    
})