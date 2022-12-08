<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

useHead({
  title: 'Forgot Password',
})

const error = ref()
const loading = ref(false)
const isError = ref(false)
const sent = ref(false)

const schema = object({
  email: string().email().required().label('Email'),
})

const { handleSubmit: _handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    email: '',
  },
})

const handleSubmit = _handleSubmit(async (formValues) => {
  error.value = ''
  isError.value = false
  loading.value = true

  try {
    await forgotPassword({
      email: formValues.email,
    })
    sent.value = true
  }
  catch (e: any) {
    error.value = e.data.message
    isError.value = true
  }
  finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="rounded-lg p-6 sm:min-w-[420px]">
    <AppLogo :class="sent ? 'h-10 mx-auto' : 'h-10'" />

    <VAlert v-if="sent" color="success" class="text-center shadow-md p-6 rounded-lg border mt-10">
      <VIcon name="ic:round-check-circle" size="lg" />
      <h1 class="text-lg font-semibold text-success-800 mt-3">
        Email Sent
      </h1>
      <p class="text-success-700 text-sm mt-4">
        It can take a few minutes to receive your password recovery link.
      </p>
      <p class="text-success-700 text-sm mt-3">
        If you do not receive this link, please contact your administrator.
      </p>
    </VAlert>
    <template v-else>
      <h1 class="text-2xl font-bold mt-5 text-gray-800">
        Password Recovery
      </h1>
      <p class="text-gray-500 mt-3">
        We'll send reset password link to your email.
      </p>

      <VAlert v-model="isError" color="error" class="mt-6">
        {{ error }}
      </VAlert>

      <form class="mt-5" @submit="handleSubmit">
        <VInput
          label="Email"
          placeholder="e.g. budi@gitsmail.com"
          name="email"
          prepend-icon="ri:mail-line"
        />
        <VBtn
          :loading="loading"
          type="submit"
          class="mt-5"
          color="primary"
          block
        >
          Send Email
        </VBtn>
      </form>
    </template>
    <div class="text-center mt-2">
      <VBtn color="primary" text to="/auth/login">
        <template v-if="sent">
          Sign in
        </template>
        <template v-else>
          Ready to sign in?
        </template>
      </VBtn>
    </div>
  </div>
</template>
