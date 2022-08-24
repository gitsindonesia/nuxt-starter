<script setup lang="ts">
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { FormEvent } from '~~/types/form';

const props =
  defineProps<{
    initialValues?: Record<string, any>;
    loading?: boolean;
  }>();

const emit =
  defineEmits<{
    (e: 'submit', payload: FormEvent): void;
    (e: 'cancel'): void;
  }>();

const { handleSubmit, resetForm } = useForm({
  validationSchema: object({
    name: string().required().label('Name'),
    email: string().required().label('Email'),
    password: string().required().label('Password'),
  }),
  initialValues: props.initialValues,
});

const onSubmit = handleSubmit((values, ctx) => {
  emit('submit', { values, ctx });
});

const router = useRouter();

const cancel = () => {
  emit('cancel');
  resetForm();
  router.push('/users');
};
</script>

<template>
  <form @submit="onSubmit">
    <v-card hide-header hide-footer body-class="py-4">
      <v-input
        name="name"
        wrapper-class="mb-4"
        label="Name"
        placeholder="Username"
      />
      <v-input
        name="email"
        wrapper-class="mb-4"
        label="Email"
        placeholder="Email"
      />
      <v-input
        name="password"
        wrapper-class="mb-4"
        label="Password"
        placeholder="Password"
      />
      <v-quill-editor
        name="bio"
        wrapper-class="mb-4"
        label="Bio"
        placeholder="Bio"
      />
      <div class="flex items-center gap-2">
        <v-btn type="submit" color="primary" :loading="loading"> Save </v-btn>
        <v-btn type="reset" text @click="cancel" :disabled="loading">
          Cancel
        </v-btn>
      </div>
    </v-card>
  </form>
</template>
