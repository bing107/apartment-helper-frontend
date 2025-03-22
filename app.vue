<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4">Find Your Next Berlin Apartment</h1>
      <p class="mb-6 text-gray-600">
        Get personalized help finding apartments in Berlin. Sign up to be the
        first to know when we launch.
      </p>

      <form @submit.prevent="submitEmail">
        <input
          v-model="email"
          type="email"
          required
          placeholder="you@example.com"
          class="w-full p-3 border rounded-xl mb-4"
        />
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-black text-white p-3 rounded-xl hover:bg-gray-800"
        >
          {{ loading ? "Submitting..." : "Notify Me" }}
        </button>
      </form>

      <p v-if="success" class="text-green-600 mt-4">You're on the list!</p>
      <p v-if="error" class="text-red-600 mt-4">
        Something went wrong. Try again later.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const loading = ref(false);
const success = ref(false);
const error = ref(false);

const submitEmail = async () => {
  loading.value = true;
  success.value = false;
  error.value = false;

  try {
    await $fetch(`${useRuntimeConfig().public.apiBase}/signup`, {
      method: "POST",
      body: { email: email.value },
    });

    success.value = true;
    email.value = "";
  } catch (e) {
    error.value = true;
  } finally {
    loading.value = false;
  }
};
</script>
