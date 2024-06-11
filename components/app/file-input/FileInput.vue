<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'
import {
  UploadCloud02Icon,
} from '@morphemeicons/vue/untitled'

const {
  placeholder = '',
  accept,
  directory = false,
  buttonLabel = 'Klik untuk unggah',
  hideFiles = false,
  label = '',
  multiple = false,
  error = false,
  errorMessage = '',
  labelClass = '',
  removeable = false,
  disabled = false,
} = defineProps<{
  placeholder?: string
  accept?: string
  directory?: boolean
  buttonLabel?: string
  label?: string
  hideFiles?: boolean
  multiple?: boolean
  error?: boolean
  errorMessage?: string
  labelClass?: string
  removeable?: boolean
  disabled?: boolean
}>()

const modelValue = defineModel<File[]>({
  default: [],
})

const { files, open, reset, onChange } = useFileDialog({
  accept,
  directory,
})

onChange((files) => {
  if (files)
    modelValue.value = Array.from(files)
})

function removeFile(index: number) {
  modelValue.value = modelValue.value.filter((_, i) => i !== index)
}

defineExpose({
  files,
  open,
  reset,
})
</script>

<template>
  <div>
    <div v-if="label" class="v-input-label" :class="labelClass">
      {{ label }}
    </div>

    <div
      v-if="multiple || !modelValue.length"
      class="border border-gray-200 rounded-[12px] p-[14px] flex flex-col items-center justify-center gap-2"
      :class="{
        'border-red-500': error,
      }"
    >
      <div class="size-10 rounded-full flex items-center justify-center bg-gray-100 border-[6px] border-gray-50">
        <UploadCloud02Icon class="size-5 shrink-0 text-gray-600" />
      </div>
      <VButton
        :disabled="disabled"
        color="primary"
        text
        flush
        @click="open"
      >
        {{ buttonLabel }}
      </VButton>
      <p class="text-xs text-gray-600">
        {{ placeholder }}
      </p>
    </div>

    <div v-if="!hideFiles && modelValue.length" class="flex flex-col gap-1 mt-2">
      <FileInputItem
        v-for="(file, index) in modelValue"
        :key="index"
        :image="getObjectURL(file)"
        :label="label"
        :filename="file.name"
        :removeable="removeable"
        @remove="removeFile(index)"
      />
    </div>

    <div v-if="error" class="v-input-error">
      {{ errorMessage }}
    </div>

    <slot
      v-bind="{
        files: modelValue,
        open,
        reset,
        multiple,
        removeFile,
      }"
    />
  </div>
</template>
