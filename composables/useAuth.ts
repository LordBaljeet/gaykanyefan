import { FirebaseError } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	type Auth
} from 'firebase/auth';


export const useAuth = (auth: Auth) => {

	async function login(email: string, password: string) {
		try {
			const userCredentials = await signInWithEmailAndPassword(auth!, email, password);
			return {
				data: userCredentials,
				message: 'Logged in successfully!',
			};
		} catch (error: any) {
			let message;
			if (error instanceof FirebaseError) {
				console.error('Firebase Error:', error.code, error.message);
				message = mapFirebaseError(error.code);
			} else {
				console.error('Unknown Error:', error);
				message = error.message;
			}
			throw new Error(message);
		}
	}

	function logout() {
		try {
			auth!.signOut();
			return {
				message: 'Signed out successfully!',
			};
		} catch (error: any) {
			let message;
			if (error instanceof FirebaseError) {
				console.error('Firebase Error:', error.code, error.message);
				message = mapFirebaseError(error.code);
			} else {
				console.error('Unknown Error:', error);
				message = error.message;
			}
			throw new Error(message);
		}
	}

	async function signUpWithEmail(
		username: string,
		email: string,
		password: string
	) {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth!, email, password);
			return {
				data: userCredential,
				message: 'Account successfully created!',
			};
		} catch (error: any) {
			let message;
			if (error instanceof FirebaseError) {
				console.error('Firebase Error:', error.code, error.message);
				message = mapFirebaseError(error.code);
			} else {
				console.error('Unknown Error:', error);
				message = error.message;
			}
			throw new Error(message);
		}
	}

	function signInWithGoogle() {}

	return {
		login,
		logout,
		signUpWithEmail,
		signInWithGoogle,
	};
};
