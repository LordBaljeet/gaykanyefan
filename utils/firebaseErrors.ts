
const firebaseErrorMapping: { [key: string]: string } = {
    'auth/invalid-email'            : 'The email address provided is not in a valid format.',
    'auth/weak-password'            : 'The password provided is too weak.',
    'auth/email-already-in-use'     : 'The email address provided is already associated with an existing account.',
    'auth/user-disabled'            : 'This user account has been disabled.',
    'auth/user-not-found'           : 'This user account does not exist.',
    'auth/wrong-password'           : 'The password provided is incorrect.',
    'auth/too-many-requests'        : 'Too many requests have been made to the Firebase Authentication API.',
    'auth/operation-not-allowed'    : 'The requested operation is not allowed for the current user.',
    'auth/invalid-credential'       : 'The provided authentication credential is invalid.',
    'auth/internal-error'           : 'An internal error occurred on the Authentication server.',
}


export const mapFirebaseError = (errorCode: string) => {
    if (errorCode in firebaseErrorMapping) {
        return firebaseErrorMapping[errorCode];
    } else {
        return 'An unknown error occurred.';
    }
}