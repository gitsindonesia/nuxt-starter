<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { jwtDecode } from 'jwt-decode'
import { type LoginPayload, login } from '~/api/auth'
import { getErrorMessage } from '~/utils/helpers'

definePageMeta({
  layout: 'auth',
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: yup.object({
    username: yup
      .string()
      .required()
      .label('Username'),
    password: yup.string().required().label('Kata sandi'),
  }),
  initialValues: {
    username: '',
    password: '',
  },
})

const auth = useAuth()
const error = ref('')

const loginMutation = useMutation({
  mutationFn: (payload: LoginPayload) => {
    return login(payload)
  },
  onSuccess(res) {
    const {data} = res
    const user = {
      id: data.id,
      name: data.firstName + ' ' + data.lastName,
      email: data.username + '@morpheme.com',
    }
    const token = res.data.token
    const decoded = jwtDecode(token)
    console.log(decoded)
    auth.login(user, token)
    navigateTo('/')
  },
  onError(err) {
    error.value = getErrorMessage(err)
  },
})

const onSubmit = handleSubmit((values) => {
  loginMutation.mutate(values)
})
</script>

<template>
  <div>
    <h1 class="font-bold text-xl text-gray-800 mb-2">
      Selamat datang di Morpheme!
    </h1>
    <p class="text-sm text-gray-600 mb-4">
      Masuk untuk melanjutkan
    </p>

    <Alert v-if="error" color="error" class="my-4">
      {{ error }}
    </Alert>

    <form @submit="onSubmit">
      <FormInput
        name="username"
        label="Username"
        placeholder="Contoh: emilys"
        hint="Username: emilys"
        wrapper-class="mb-4"
      />

      <FormPasswordInput
        name="password"
        label="Kata Sandi"
        placeholder="Masukkan kata sandi Anda"
        hint="Password: emilyspass"
        wrapper-class="mb-4"
      />

      <div class="flex items-center justify-end mb-4">
        <VButton
          :disabled="isSubmitting"
          text
          flush
          color="primary"
          to="/auth/forgot-password"
        >
          Lupa kata sandi
        </VButton>
      </div>

      <VButton
        block
        color="primary"
        type="submit"
        class="mb-4"
        :loading="isSubmitting"
      >
        Masuk
      </VButton>
      <VButton
        block
        class="mb-4"
        type="button"
        to="/auth/register"
        :disabled="isSubmitting"
      >
        Daftar Akun
      </VButton>
    </form>

    <div class="flex items-center justify-center gap-1 mt-6">
      <p class="text-gray-600 text-sm">
        Butuh Bantuan?
      </p>
      <VButton color="primary" text flush>
        Hubungi Kami
      </VButton>
    </div>
  </div>
</template>
