<script setup lang="ts">
import { useForm } from 'vee-validate'
import { boolean, object, string } from 'yup'

definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

useHead({
  title: 'Register',
})

const router = useRouter()

const error = ref()
const isError = ref(false)
const loading = ref(false)
const showPassword = ref(false)

const schema = object({
  name: string().email().required().label('Name'),
  email: string().email().required().label('Email'),
  password: string().required().label('Password'),
  toc: boolean().required('You must agree to terms and condition'),
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
    // register logic here
    // const res = await register(formValues)

    router.push('/auth/login')
  }
  catch (e: any) {
    isError.value = true
    error.value = e.data?.message || e.message
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
      Daftar Akun
    </h1>
    <p class="text-gray-500 mt-3">
      Buat akun Anda sekarang!
    </p>

    <VAlert v-model="isError" color="error" class="mt-6">
      {{ error }}
    </VAlert>

    <form class="mt-5" @submit="handleSubmit">
      <VInput
        label="Name"
        placeholder="Name"
        name="name"
        prepend-icon="ri:user-line"
        wrapper-class="mb-4"
      />
      <VInput
        label="Email"
        wrapper-class="mb-4"
        placeholder="Email"
        name="email"
        prepend-icon="ri:mail-line"
      />
      <VInput
        wrapper-class="mb-4"
        label="Password"
        placeholder="Password"
        name="password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'ri:eye-line' : 'ri:eye-off-line'"
        prepend-icon="ri:lock-line"
        @click-append-icon="showPassword = !showPassword"
      />
      <VCheckbox
        wrapper-class="mb-4"
        name="toc"
        label="I agree with terms and condition."
      />
      <VBtn
        :loading="loading"
        type="submit"
        class="mt-5"
        color="primary"
        block
      >
        Register
      </VBtn>
    </form>
    <div class="flex gap-2 justify-center text-gray-600 text-sm font-medium items-center mt-5">
      <div class="border-b flex-1" />
      Already have account?
      <div class="border-b flex-1" />
    </div>
    <v-btn block outlined to="/auth/register" class="mt-5">
      Login
    </v-btn>
  </div>
</template>
