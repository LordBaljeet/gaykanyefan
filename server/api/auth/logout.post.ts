// import { auth } from "@/server/lib/firebase"

// export default defineEventHandler(async (event) => {
//     const body = await readBody(event)
//     try {
//         auth.signOut()
//         return {
//             message: "Signed out successfully!"
//         }
//     }catch(error: any)
//     {
//         let message;
//         switch(error.code)
//         {
//             //auth/invalid-login-credentials
//             default: message = "Invalid credentials"
//         }
        
//         throw createError({
//             statusCode: 400,
//             statusMessage: message
//         })
//     }
    
// })