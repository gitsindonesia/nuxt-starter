import { useForm } from 'vee-validate'
import { object, string } from 'yup'

export const useLogin = () => {
  const auth = useAuthStore()
  const router = useRouter()
  const route = useRoute()

  const error = ref()
  const loading = ref(false)
  const showPassword = ref(false)
  const showAlert = ref(false)

  const schema = object({
    email: string().email().required().label('Email'),
    password: string().required().label('Password'),
  })

  const { handleSubmit: _handleSubmit } = useForm({
    validationSchema: schema,
    initialValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmit = _handleSubmit(async () => {
    error.value = ''
    showAlert.value = false
    loading.value = true

    try {
      // const res = await login(formValues)

      auth.login({
        name: 'John Doe',
        email: 'john@example.com',
      }, 'ABC123')

      router.push((route.query as any).next || '/dashboard')
    }
    catch (e: any) {
      error.value = e.data?.message || e.message
      showAlert.value = true
    }
    finally {
      loading.value = false
    }
  })

  return { handleSubmit, showPassword, error, showAlert, loading }
}
