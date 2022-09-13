<script setup lang="ts">
definePageMeta({
  layout: 'blank',
  middleware: 'guest',
});

useHead({
  title: 'Login',
});

const { handleSubmit, showAlert, showPassword, error, loading } = useLogin();
</script>

<template>
  <div class="grid place-items-center sm:h-screen">
    <div class="w-full sm:max-w-lg">
      <div class="bg-white sm:rounded-xl sm:shadow p-6">
        <v-logo img-class="h-10 mx-auto" />

        <h1 class="text-center text-3xl font-semibold mt-4 text-gray-800">
          Welcome back!
        </h1>
        <p class="text-gray-500 text-center mt-2">Log in to your account</p>

        <v-alert v-model="showAlert" color="error" class="mt-6">
          {{ error }}
        </v-alert>

        <form class="mt-4" @submit="handleSubmit">
          <v-input
            label="Email"
            placeholder="Email"
            name="email"
            prepend-icon="ri:mail-line"
          />
          <v-input
            wrapper-class="mt-4"
            label="Password"
            placeholder="Password"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="ri:lock-line"
            append-icon="ri:eye-line"
            @clickPrependIcon="showPassword = !showPassword"
          />
          <v-checkbox
            wrapper-class="mt-4"
            name="rememberMe"
            label="Remember me"
          />
          <v-btn
            :loading="loading"
            type="submit"
            class="mt-4"
            color="primary"
            block
          >
            Login
          </v-btn>
        </form>
      </div>
      <div class="text-center mt-2">
        <v-btn color="primary" text to="/auth/forgot-password">
          Forgot Password?
        </v-btn>
      </div>
    </div>
  </div>
</template>
