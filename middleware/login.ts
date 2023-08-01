export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp()
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
    return

  const user = await getCurrentUser()

  if (user) {
    return navigateTo('/')
  }
})
