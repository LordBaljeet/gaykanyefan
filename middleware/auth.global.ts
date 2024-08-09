export default defineNuxtRouteMiddleware(async (to, from) => {

  const exemptedPaths = ['/login', '/register']
  const signedOutPaths = ['/login', '/register']

  const user = await getCurrentUser();

  if (user) {
    console.log("User logged in");
  }
  else {
    console.log("User not logged in");
  }

  if (!exemptedPaths.includes(to.path) && !user) {
    console.log('redirecting..');
    return navigateTo({
      path: '/login'
    })
  } else if (signedOutPaths.includes(to.path) && user) {
    console.log(
      'accessing route reserved for unsigned users while being signed in'
    );
    return navigateTo({
      path: '/'
    })
  } else {
    console.log('Access Authorized');
  }
})
