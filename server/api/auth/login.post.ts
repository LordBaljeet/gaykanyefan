// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/server/lib/firebase"
// import { FirebaseError } from "firebase/app";
// import { useUtils } from "~/server/utils/useUtils";

// export default defineEventHandler(async (event) => {
//     const { mapFirebaseError } = useUtils();
//     const body = await readBody(event)
//     try {
//         const user = await signInWithEmailAndPassword(auth, body.email, body.password)
//         return {
//             data: user,
//             message: "Logged in successfully!"
//         }
//     } catch(error: any) {
//         let message;
//         if (error instanceof FirebaseError) {
//             console.error("Firebase Error:", error.code, error.message);
//             message = mapFirebaseError(error.code);
//           } else {
//             console.error("Unknown Error:", error);
//             message = error.message;
//           }
//         throw createError({
//             statusCode: 400,
//             statusMessage: message
//         })
//     }
    
// })