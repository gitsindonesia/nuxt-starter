import { useForm } from 'vee-validate'
import { object, string } from 'yup'

export const useForgotPassword = () => {
  const error = ref()
  const loading = ref(false)
  const showAlert = ref(false)
  const sent = ref(false)

  const schema = object({
    email: string().email().required().label('Email'),
  })

  const { handleSubmit: _handleSubmit } = useForm({
    validationSchema: schema,
    initialValues: {
      email: '',
    },
  })

  const handleSubmit = _handleSubmit(async (formValues) => {
    error.value = ''
    showAlert.value = false
    loading.value = true

    try {
      await forgotPassword({
        email: formValues.email,
      })
      sent.value = true
    }
    catch (e) {
      error.value = e.data.message
      showAlert.value = true
    }
    finally {
      loading.value = false
    }
  })

  return { handleSubmit, error, showAlert, loading, sent }
}
