---
to: components/<%= h.changeCase.pascal(h.inflection.pluralize(name)) %>/Form.vue
---
<%
  Fields = (locals.fields || '').split(',').map(v => v.split(':'));
  FieldNames = Fields.map(v => v[0]);
  PascalName = h.changeCase.pascal(name);
  PluralName = h.inflection.pluralize(name);
  SingularName = h.inflection.singularize(name);
  LowerPluralName = h.changeCase.lower(PluralName);
  LowerSingularName = h.changeCase.lower(SingularName);
  PascalPluralName = h.changeCase.pascal(PluralName);
  PascalSingularName = h.changeCase.pascal(SingularName);
%>
<script setup lang="ts">
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { FormEvent } from '~~/types/form';

const props = defineProps<{
  initialValues?: Record<string, any>;
  loading?: boolean;
}>();

const emit = defineEmits<{
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
      <div class="flex items-center gap-2">
        <v-btn type="submit" color="primary" :loading="loading"> Save </v-btn>
        <v-btn type="reset" text @click="cancel" :disabled="loading">
          Cancel
        </v-btn>
      </div>
    </v-card>
  </form>
</template>
