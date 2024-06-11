import { defineStore } from 'pinia'
import type {
  VToastProps,
} from '@morpheme/toast'

export interface ToastOptions extends Omit<VToastProps, 'modelValue'> {
}

export const useToast = defineStore('toast', () => {
  const isOpen = ref<boolean>(false)
  const message = ref<string>('')
  const options = ref<ToastOptions>({
    color: 'default',
    timeout: 3000,
  })

  const show = (_message: string, _options: ToastOptions = {}) => {
    message.value = _message
    options.value = _options
    isOpen.value = true

    if (options.value.timeout) {
      setTimeout(() => {
        isOpen.value = false
        message.value = ''
      }, options.value.timeout)
    }
  }

  const close = () => {
    isOpen.value = false
    message.value = ''
  }

  return {
    isOpen,
    message,
    options,
    show,
    close,
    hide: close,
  }
})
