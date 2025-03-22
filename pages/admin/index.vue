<template>
  <div class="min-h-screen bg-slate-50 px-4 py-10">
    <div class="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">
      <h1 class="text-2xl font-bold mb-6">📋 Signups</h1>

      <div v-if="loading" class="text-gray-500">Loading...</div>
      <div v-if="error" class="text-red-600">Failed to load signups.</div>

      <table
        v-if="signups.length"
        class="w-full text-sm text-left text-gray-600"
      >
        <thead>
          <tr class="border-b">
            <th class="py-2">Email</th>
            <th class="py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="signup in signups" :key="signup.id" class="border-b">
            <td class="py-2">{{ signup.email }}</td>
            <td class="py-2">{{ formatDate(signup.createdAt) }}</td>
          </tr>
        </tbody>
      </table>

      <p v-if="!signups.length && !loading" class="text-gray-500">
        No signups yet.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, useRoute } from "vue";

const route = useRoute();
const emailKey = "adminKey";
const valid = ref(false);
const signups = ref([]);
const loading = ref(true);
const error = ref(false);

const ADMIN_KEY = "mySuperSecret123";

onMounted(() => {
  if (route.query[emailKey] === ADMIN_KEY) {
    valid.value = true;
    fetchSignups();
  } else {
    loading.value = false;
  }
});

const fetchSignups = async () => {
  try {
    signups.value = await $fetch(`${useRuntimeConfig().public.apiBase}/signup`);
  } catch (e) {
    error.value = true;
  } finally {
    loading.value = false;
  }
};

const formatDate = (dateStr) => new Date(dateStr).toLocaleString("de-DE");
</script>
