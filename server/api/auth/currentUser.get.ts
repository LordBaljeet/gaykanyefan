import { getAuth } from "firebase/auth";

import { app } from "~/server/lib/firebase";

export default defineEventHandler(async (event) => {
    const auth = getAuth(app);
    return {
        user: auth.currentUser,
        loggedIn: auth.currentUser != null
    }
    
})