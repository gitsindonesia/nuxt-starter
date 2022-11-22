<script setup lang="ts">
import { object, string } from 'yup'
import { useForm } from 'vee-validate'

const schema = object({
  name: string().required().label('Name'),
  email: string().required().email().label('Email'),
})

const { handleSubmit, resetForm } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit((values) => {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(values))
})
</script>

<template>
  <AppPageTitle title="Forms" subtitle="Basic Example" />

  <AppCard>
    <AppCardTitle>
      Form Title
    </AppCardTitle>
    <form @submit="onSubmit">
      <VInput
        wrapper-class="mb-5"
        name="name"
        label="Name"
        placeholder="Your Name"
      />
      <VInput
        wrapper-class="mb-5"
        name="email"
        label="Email"
        placeholder="Your Email"
      />
      <div class="mt-4 space-x-2">
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn type="button" text @click="resetForm">
          Reset
        </VBtn>
      </div>
    </form>
  </AppCard>
</template>
