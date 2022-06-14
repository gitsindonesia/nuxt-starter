---
to: components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.vue
---
<script setup lang="ts">
import {toRefs} from 'vue';

type Props = {
  modelValue: string;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
});

const {modelValue} = toRefs(props);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div>Hello World</div>
</template>

