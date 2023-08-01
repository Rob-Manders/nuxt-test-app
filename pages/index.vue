<template>
	<p v-for="document in testCollection">{{ document.name }}</p>
</template>

<script setup lang="ts">
import { collection, doc } from 'firebase/firestore'

// Firestore
const db = useFirestore()

const testCollection = useCollection(collection(db, 'test-collection'))
const testDocument = useDocument(doc(collection(db, 'test-collection'), 'test-document'))
</script>