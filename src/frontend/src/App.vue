<template>
  <div>
    <h1>⚔️ Vue + Express Monolith</h1>
    <button @click="ping">Check Backend</button>
    <p v-if="status">Backend says: {{ status }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const status = ref("");

async function ping() {
  const res = await fetch("/api/health");
  const data = await res.json();
  status.value = data.status;
}
</script>
