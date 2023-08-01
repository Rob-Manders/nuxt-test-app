<template>
	Protected page.
</template>

<script setup lang="ts">
definePageMeta({
	middleware: ['auth']
})

const router = useRouter()
const user = useCurrentUser()

watch(user, () => {
	if (!user.value) router.push('/login')
})
</script>