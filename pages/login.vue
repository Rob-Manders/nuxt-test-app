<template>
	Please log in.
</template>

<script setup lang="ts">
definePageMeta({
	middleware: ['login']
})

const route = useRoute()
const user = useCurrentUser()

watch(user, () => {
	if (user) {
		navigateTo({
			path: String(route.query.redirect ?? '/page')
		})
	}
})
</script>