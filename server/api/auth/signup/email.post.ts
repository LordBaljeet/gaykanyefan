// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/server/lib/firebase"
// import { FirebaseError } from "firebase/app";
// import { useUtils } from "~/server/utils/useUtils";

// const { mapFirebaseError } = useUtils();

// export default defineEventHandler(async (event) => {
//     const body = await readBody(event);

//     try {
//         const user = await createUserWithEmailAndPassword(auth, body.email, body.password)
//         return {
//             data: user,
//             message: "Account successfully created!"
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