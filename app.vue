<template>
  <div>
    <button v-if="user" @click="logOut">Sign Out</button>
    <button v-else @click="logIn">Sign In</button>
    <div v-if="user">
      <p>{{ user.displayName }}</p>
      <img :src="user.photoURL ?? ''" />
    </div>
  </div>
</template>

<script lang="ts">
export const googleAuthProvider = new GoogleAuthProvider()
</script>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const auth = useFirebaseAuth()!
const user = useCurrentUser()

function logIn() {
  signInWithPopup(auth, googleAuthProvider).catch(reason => {
    console.error('Failed sign in', reason)
  })
}

function logOut() {
  signOut(auth).catch(reason => {
    console.error('Failes sign out', reason)
  })
}
</script>
