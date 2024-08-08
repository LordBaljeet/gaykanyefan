export default defineNuxtRouteMiddleware(async (to, from) => {
  const exemptedPaths = ['/login', '/register']
  const signedOutPaths = ['/login', '/register']

  const { data } = await useFetch('/api/auth/currentUser')

  const isLoggedIn = data.value?.loggedIn
  
  if(data.value?.loggedIn)
  {
    console.log("User logged in");
  }
  else {
    console.log("User not logged in");
  }

  if (!exemptedPaths.includes(to.path) && !isLoggedIn) {
    console.log('redirecting..')
    return navigateTo(`/login`)
  }
  else if (signedOutPaths.includes(to.path) && isLoggedIn) {
    console.log('accessing route reserved for unsigned users while being signed in');
    return navigateTo('/')
  }
  else {
    console.log("Access Authorized");
  }
})
  