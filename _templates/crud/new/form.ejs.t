---
to: components/<%= h.changeCase.pascal(h.inflection.pluralize(name)) %>/Form.vue
---
<%
Fields = (locals.fields ?? '').split(',').map(v => v.split(':'));
FieldNames = Fields.map(v => v[0]);
SearchBy = FieldNames.map(v => `'${v[0]}'`).join(', ')
%>
<script setup lang="ts">
import {computed, type PropType, toRefs} from 'vue';
import {Field, Form} from 'vee-validate';
import type {Actions} from '@/composables';
import {useFormAction} from '@/composables';
import {object, string} from 'yup';

const props = defineProps({
  action: {
    type: String as PropType<Actions>,
    default: 'view',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  initialValues: {
    type: Object,
    default: () => ({}),
  },
});

const {action, loading, initialValues} = toRefs(props);

const emit = defineEmits(['submit']);

const {isView} = useFormAction(action.value);
const title = computed(() => `${action.value} <%= h.changeCase.pascal(name) %>`);

const schema = computed(() => {
  if (isView.value) return {};

  return object({
    <% Fields.forEach(function(field){ %>
    <%= h.changeCase.camelCase(field[0]) %>: <%= field[1] %>().required().label('<%= h.changeCase.title(field[0]) %>'),
    <% }); %>
  });
});

const onSubmit = (values: any) => {
  emit('submit', values);
};
</script>

<template>
  <Form
    :initial-values="initialValues"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <v-card
      :title="title"
      header-class="capitalize"
      footer-class="flex gap-2"
      body-class="flex-col"
    >
      <% Fields.forEach(function(field){ %>
      <<%= field[2] ?? 'v-input' %>
        id="<%= h.changeCase.camelCase(field[0]) %>"
        name="<%= h.changeCase.camelCase(field[0]) %>"
        label="<%= h.changeCase.title(field[0]) %>"
        placeholder="<%= h.changeCase.title(field[0]) %>"
        :text="isView"
        wrapper-class="mb-4"
      />
      <% }); %>

      <template v-if="!isView" #footer>
        <v-btn :loading="loading" type="submit" color="primary"> Submit </v-btn>
        <v-btn :disabled="loading" type="reset" to="/cms/<%= h.changeCase.lower(h.inflection.pluralize(name)) %>"> Cancel </v-btn>
      </template>
    </v-card>
  </Form>
</template>