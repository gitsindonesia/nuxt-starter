<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

useHead({
  title: 'Forgot Password',
})

const { handleSubmit, showAlert, error, loading, sent } = useForgotPassword()
</script>

<template>
  <LayoutsTwoColumn>
    <div class="rounded-lg p-6 sm:min-w-[420px]">
      <AppLogo :class="sent ? 'h-10 mx-auto' : 'h-10'" />

      <div v-if="sent" class="text-center">
        <h1 class="text-3xl font-semibold mt-5 text-gray-800">
          Email Sent
        </h1>
        <p class="text-gray-500 mt-5">
          It can take a few minutes to receive your password recovery link.
        </p>
        <p class="text-gray-500 mt-3">
          If you do not receive this link, please contact your administrator.
        </p>
      </div>
      <template v-else>
        <h1 class="text-2xl font-bold mt-5 text-gray-800">
          Password Recovery
        </h1>
        <p class="text-gray-500 mt-3">
          We'll send reset password link to your email.
        </p>

        <v-alert v-model="showAlert" color="error" class="mt-6">
          {{ error }}
        </v-alert>

        <form class="mt-5" @submit="handleSubmit">
          <v-input
            label="Email"
            placeholder="e.g. budi@gitsmail.com"
            name="email"
            prepend-icon="ri:mail-line"
          />
          <v-btn
            :loading="loading"
            type="submit"
            class="mt-5"
            color="primary"
            block
          >
            Send Email
          </v-btn>
        </form>
      </template>
      <div class="text-center mt-2">
        <v-btn color="primary" text to="/auth/login">
          <template v-if="sent">
            Sign in
          </template>
          <template v-else>
            Ready to sign in?
          </template>
        </v-btn>
      </div>
    </div>
  </LayoutsTwoColumn>
</template>
