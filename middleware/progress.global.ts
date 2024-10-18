// global middle ware to handle progress bar

export default defineNuxtRouteMiddleware((to, from) => {
	console.log(to, from, 'progress bar')
})
