export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth()
  const toast = useToast()

  // Redirect to login page if not logged in
  // and trying to access a protected page
  // if (!auth.isLoggedIn && !to.path.startsWith('/auth')) {
  //   toast.show('You need to login to access this page.', {
  //     color: 'error',
  //   })

  //   return navigateTo('/auth/login')
  // }

  if (auth.isLoggedIn && to.path.startsWith('/auth')) {
    toast.show('You already logged in!', {
      color: 'error',
    })

    return navigateTo('/')
  }
})
