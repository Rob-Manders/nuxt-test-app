<template>
	<nav>
		<button v-if="user" @click="useLogout">Sign Out</button>
		<button v-else @click="useLogin">Sign In</button>
		<div v-if="user">
			<p>{{ user.displayName }}</p>
			<img :src="user.photoURL ?? ''" />
		</div>
		<NuxtLink to="/page">A Page</NuxtLink> |
		<NuxtLink to="/protected">A Protected Paged</NuxtLink>
	</nav>
	<slot />
</template>

<script setup lang="ts">
const user = useCurrentUser()
</script>