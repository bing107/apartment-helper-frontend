<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 to-white text-gray-800 font-sans"
  >
    <!-- Hero -->
    <section
      class="text-center px-6 py-24 bg-gradient-to-br from-indigo-100 via-white to-sky-100 rounded-b-3xl shadow-inner"
    >
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text">
        Find Your Next Apartment — Without the Stress
      </h1>
      <p class="text-lg md:text-xl text-gray-700 mb-10">
        We search, apply, and schedule viewings — you just move in.
      </p>
      <form
        @submit.prevent="submitEmail"
        class="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
      >
        <input
          v-model="email"
          type="email"
          required
          placeholder="Enter your email"
          class="flex-1 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          class="bg-black cursor-pointer text-white px-6 py-3 rounded-xl hover:brightness-110 transition"
        >
          <span v-if="!loading">Get Started</span>
          <span v-else class="flex items-center">
            <svg
              class="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Sending...
          </span>
        </button>
      </form>

      <p v-if="loading" class="text-green-600 mt-4">
        Redirecting to the intake form... (processing takes a few seconds 🙏)
      </p>
      <p v-if="submitted" class="text-green-600 mt-4">✅ You're in!</p>
    </section>

    <!-- How it works -->
    <section class="py-24 px-6 bg-white text-center">
      <h2 class="text-3xl font-bold mb-12">How It Works</h2>
      <div class="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div class="bg-indigo-50 rounded-2xl p-6 shadow-md">
          <div class="text-4xl mb-2">📝</div>
          <h3 class="text-xl font-semibold mb-2">1. Tell us what you need</h3>
          <p class="text-gray-600">
            Fill out a quick form with your location, budget, and preferences.
          </p>
        </div>
        <div class="bg-indigo-50 rounded-2xl p-6 shadow-md">
          <div class="text-4xl mb-2">🔎</div>
          <h3 class="text-xl font-semibold mb-2">2. We search & apply</h3>
          <p class="text-gray-600">
            Our team finds listings and applies on your behalf.
          </p>
        </div>
        <div class="bg-indigo-50 rounded-2xl p-6 shadow-md">
          <div class="text-4xl mb-2">📅</div>
          <h3 class="text-xl font-semibold mb-2">3. You book viewings</h3>
          <p class="text-gray-600">
            We schedule appointments — all you have to do is show up.
          </p>
        </div>
      </div>
    </section>

    <!-- Why GYA -->
    <section
      class="py-24 px-6 bg-gradient-to-br from-white to-indigo-50 text-center"
    >
      <h2 class="text-3xl font-bold mb-12">Why Get Your Apartment?</h2>
      <div
        class="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left items-center"
      >
        <ul class="space-y-4 text-lg text-gray-700">
          <li>✅ Personalized listings tailored to your needs</li>
          <li>✅ Done-for-you application support</li>
          <li>✅ Fast turnaround from a real human team</li>
          <li>✅ Multilingual support (English/German)</li>
        </ul>
        <div class="flex items-center justify-center">
          <img
            src="/shutterstock_1823129258.webp"
            alt="Apartment"
            class="w-72 h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-24 px-6 bg-white text-center">
      <div
        class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center text-left"
      >
        <div>
          <h3 class="font-bold text-lg mb-4">What you get with GYA Pro:</h3>
          <ul class="text-gray-700 space-y-2">
            <li>✅ Personalized listings</li>
            <li>✅ Up to 10 applications per month</li>
            <li>✅ Custom cover letters</li>
            <li>✅ Appointment scheduling</li>
          </ul>
        </div>
        <div
          class="text-center border border-gray-200 rounded-2xl py-12 px-6 bg-gradient-to-br from-white to-slate-100 shadow-md"
        >
          <div class="text-sm text-gray-500 mb-1">Only</div>
          <div class="text-5xl font-extrabold mb-1 text-black">€29</div>
          <div class="text-sm text-gray-500 mb-6">per month</div>
          <!-- <a
            href="https://your-stripe-checkout-link.com"
            class="bg-gradient-to-r from-indigo-600 to-sky-500 text-white px-6 py-3 rounded-xl hover:brightness-110 transition"
          >
            Get Pro Now
          </a> -->
          <p class="text-xs text-gray-400 mt-3">Cancel anytime</p>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-4">Every flat search includes:</h3>
          <ul class="text-gray-700 space-y-2">
            <li>✅ Search based on your criteria</li>
            <li>✅ Real listings (long-term & WG)</li>
            <li>✅ Bilingual support</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 px-6 bg-slate-100">
      <h2 class="text-3xl font-bold mb-12 text-center">FAQ</h2>
      <div class="max-w-3xl mx-auto space-y-6 text-left">
        <div>
          <h3 class="font-semibold">Can you apply on my behalf?</h3>
          <p class="text-gray-600">
            Yes — we’ll handle the entire application process for listings you
            approve.
          </p>
        </div>
        <div>
          <h3 class="font-semibold">
            How quickly can I expect to start receiving replies?
          </h3>
          <p class="text-gray-600">
            It depends on the availability of listings that match your criteria.
            Typically, you should start receiving replies from landlords within
            the first week.
          </p>
        </div>
        <div>
          <h3 class="font-semibold">Can I cancel the service easily?</h3>
          <p class="text-gray-600">
            Yes, you can cancel at any time. Our subscription is always for 1
            month and automatically renews for 1 more month if you don't cancel
            beforehand.
          </p>
        </div>
        <div>
          <h3 class="font-semibold">Can you help with shared flats?</h3>
          <p class="text-gray-600">
            Yes! Just select “WG/shared flat” on the form and we’ll focus on
            those listings.
          </p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="bg-white border-t border-gray-200 py-8 px-6 mt-20 text-sm text-gray-600"
    >
      <div
        class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <p>© {{ new Date().getFullYear() }} Get Your Apartment</p>
        <div class="flex space-x-6">
          <NuxtLink to="/impressum" class="hover:underline">Impressum</NuxtLink>
          <NuxtLink to="/privacy" class="hover:underline">Datenschutz</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
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
