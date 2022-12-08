<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

useHead({
  title: 'Login',
})

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

const error = ref()
const isError = ref(false)
const loading = ref(false)
const showPassword = ref(false)

const schema = object({
  email: string().email().required().label('Email'),
  password: string().required().label('Password'),
})

const { handleSubmit: _handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    email: '',
    password: '',
  },
})

const handleSubmit = _handleSubmit(async () => {
  error.value = ''
  isError.value = false
  loading.value = true

  try {
    // login logic here
    // const res = await login(formValues)

    // replace this with your actual logic
    auth.login({
      name: 'John Doe',
      email: 'john@example.com',
    }, 'ABC123')

    router.push((route.query as any).next || '/dashboard')
  }
  catch (e: any) {
    error.value = e.data?.message || e.message
    isError.value = true
  }
  finally {
    loading.value = false
  }
})
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

    <VAlert v-model="isError" color="error" class="mt-6">
      {{ error }}
    </VAlert>

    <form class="mt-5" @submit="handleSubmit">
      <VInput
        label="Email"
        placeholder="Email"
        name="email"
        prepend-icon="ri:mail-line"
      />
      <VInput
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
        <VCheckbox
          name="rememberMe"
          label="Remember me"
          wrapper-class="flex-1"
        />
        <VBtn
          color="primary"
          text
          to="/auth/forgot-password"
          class="!p-0"
          size="sm"
        >
          Forgot Password?
        </VBtn>
      </div>
      <VBtn
        :loading="loading"
        type="submit"
        class="mt-5"
        color="primary"
        block
      >
        Login
      </VBtn>
    </form>
    <div class="flex gap-2 justify-center text-gray-600 text-sm font-medium items-center mt-5">
      <div class="border-b flex-1" />
      OR
      <div class="border-b flex-1" />
    </div>
    <VBtn block outlined to="/auth/register" class="mt-5">
      Create Account
    </VBtn>
  </div>
</template>
