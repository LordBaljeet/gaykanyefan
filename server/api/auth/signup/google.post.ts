// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// // import { auth } from '@/server/lib/firebase';
// import { FirebaseError } from 'firebase/app';
// import { useUtils } from '~/server/utils/useUtils';

// const { mapFirebaseError } = useUtils();

// export default defineEventHandler(async (event) => {
// 	try {
//         debugger;
// 		const provider = new GoogleAuthProvider();
//         const auth = getAuth();
// 		signInWithPopup(auth, provider)
// 			.then((result) => {
// 				// This gives you a Google Access Token. You can use it to access the Google API.
// 				const credential = GoogleAuthProvider.credentialFromResult(result);
// 				if (credential) {
// 					const token = credential.accessToken;
// 				}
// 				// The signed-in user info.
// 				const user = result.user;
// 				return {
// 					data: user,
// 					message: 'Successfully logged in!',
// 				};
// 				// IdP data available using getAdditionalUserInfo(result)
// 				// ...
// 			})
// 			.catch((error) => {
// 				// Handle Errors here.
// 				const errorCode = error.code;
// 				const errorMessage = error.message;
// 				// The email of the user's account used.
// 				const email = error.customData.email;
// 				// The AuthCredential type that was used.
// 				const credential = GoogleAuthProvider.credentialFromError(error);
// 				// ...
// 				const message = mapFirebaseError(error.code);
// 				throw createError({
// 					statusCode: 400,
// 					statusMessage: message,
// 				});
// 			});
// 	} catch (error: any) {
// 		let message;
// 		if (error instanceof FirebaseError) {
// 			console.error('Firebase Error:', error.code, error.message);
// 			message = mapFirebaseError(error.code);
// 		} else {
// 			console.error('Unknown Error:', error);
// 			message = error.message;
// 		}
// 		throw createError({
// 			statusCode: 400,
// 			statusMessage: message,
// 		});
// 	}
// });
