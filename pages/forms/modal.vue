<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

const isOpen = ref(false)
const showPassword = ref(false)

const schema = object({
  email: string().required().label('Email'),
  password: string().required().label('Password'),
})

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values))
})

// reset validation when modal state updates
// @see https://github.com/logaretm/vee-validate/discussions/3646
watch(isOpen, () => {
  resetForm()
})
</script>

<template>
  <VBtn @click="(isOpen = !isOpen)">
    Click Here to Login
  </VBtn>

  <VModal v-model="isOpen" title="Login" hide-footer>
    <form class="mt-5" @submit="onSubmit">
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
      <v-btn
        type="submit"
        class="mt-5"
        color="primary"
        block
      >
        Login
      </v-btn>
    </form>
  </VModal>
</template>
