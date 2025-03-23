<template>
  <div
    class="min-h-screen bg-gradient-to-br from-[#fefcea] to-[#f1f1f1] flex items-center justify-center px-4"
  >
    <div
      class="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 md:p-10 relative overflow-hidden"
    >
      <!-- Soft blob background -->
      <div
        class="absolute -top-24 -left-24 w-80 h-80 bg-yellow-200 opacity-20 rounded-full blur-3xl"
      ></div>

      <h1
        class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 relative z-10"
      >
        Find Your Next Apartment in Berlin
      </h1>
      <p class="text-gray-600 mb-6 relative z-10">
        Get personalized help finding and applying to apartments in Berlin —
        curated listings, application help, and more.
      </p>

      <form @submit.prevent="submitEmail" class="space-y-4 relative z-10">
        <input
          v-model="email"
          type="email"
          required
          placeholder="you@example.com"
          class="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none transition"
        />
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition"
        >
          {{ loading ? "Submitting..." : "Notify Me" }}
        </button>
      </form>

      <!-- ✅ Animated check -->
      <transition name="fade-scale">
        <div
          v-if="success"
          class="flex items-center justify-center mt-6 text-green-600"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>You're on the list!</span>
        </div>
      </transition>

      <p v-if="error" class="text-red-600 mt-4 text-sm relative z-10">
        Something went wrong. Try again later.
      </p>

      <p class="text-gray-400 text-xs text-center mt-8 relative z-10">
        Built with 💛 in Berlin
      </p>
    </div>
  </div>
  <Analytics />
</template>

<script setup>
import { ref } from "vue";
import { Analytics } from "@vercel/analytics/nuxt";

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
    window.location.href = "https://tally.so/r/mBeEVQ";
  }
};
</script>
