<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

useHead({
  title: 'Login',
})

const { handleSubmit, showAlert, showPassword, error, loading } = useLogin()
</script>

<template>
  <div class="rounded-lg p-6 sm:min-w-[420px]">
    <AppLogo class="h-10" />

    <h1 class="text-2xl font-bold mt-6 text-gray-800">
      Masuk Akun
    </h1>
    <p class="text-gray-500 mt-3">
      Silahkan login untuk mengakses semua fitur!
    </p>

    <v-alert v-model="showAlert" color="error" class="mt-6">
      {{ error }}
    </v-alert>

    <form class="mt-5" @submit="handleSubmit">
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
        :append-icon="showPassword ? 'ri:eye-line' : 'ri:eye-off-line'"
        prepend-icon="ri:lock-line"
        @click-append-icon="showPassword = !showPassword"
      />
      <div class="flex gap-2 justify-betweeen items-center mt-5">
        <v-checkbox
          name="rememberMe"
          label="Remember me"
          wrapper-class="flex-1"
        />
        <v-btn
          color="primary"
          text
          to="/auth/forgot-password"
          class="!p-0"
          size="sm"
        >
          Forgot Password?
        </v-btn>
      </div>
      <v-btn
        :loading="loading"
        type="submit"
        class="mt-5"
        color="primary"
        block
      >
        Login
      </v-btn>
    </form>
    <div class="flex gap-2 justify-center text-gray-600 text-sm font-medium items-center mt-5">
      <div class="border-b flex-1" />
      OR
      <div class="border-b flex-1" />
    </div>
    <v-btn block outlined to="/auth/register" class="mt-5">
      Create Account
    </v-btn>
  </div>
</template>
