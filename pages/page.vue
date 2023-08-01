<template>
	A Page

	<p v-if="user">{{ user.displayName }}</p>
</template>

<script setup lang="ts">
const user = useCurrentUser()
</script>