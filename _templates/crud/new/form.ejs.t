---
to: components/<%= h.changeCase.pascal(h.inflection.singularize(name)) %>/Form.vue
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
  <% if (locals.fields) { %>
  <% Fields.forEach(field => { %>
    <%= field[0] %>: <%= field[1] %>().required().label('<%= h.changeCase.header(field[0]) %>'),
  <% }) %>
  <% } %>
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
  router.push('/<%= LowerPluralName %>');
};
</script>

<template>
  <form @submit="onSubmit">
    <v-card hide-header hide-footer body-class="py-4">
<% if (locals.fields) { %>
<% Fields.forEach(field => { %>
      <<%= field[2] ?? 'v-input' %>
        name="<%= field[0] %>"
        wrapper-class="mb-4"
        label="<%= h.changeCase.header(field[0]) %>"
        placeholder="<%= h.changeCase.header(field[0]) %>"
      />
<% }) %>
<% } %>
      <div class="flex items-center gap-2">
        <v-btn type="submit" color="primary" :loading="loading"> Save </v-btn>
        <v-btn type="reset" text @click="cancel" :disabled="loading">
          Cancel
        </v-btn>
      </div>
    </v-card>
  </form>
</template>
