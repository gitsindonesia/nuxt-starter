// deploy count: 1

export const login = ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  return $fetch('/api/auth/login', {
    method: 'post',
    body: {
      email,
      password,
    },
  })
}

export const forgotPassword = ({ email }: { email: string }) => {
  return $fetch('/api/auth/forgot-password', {
    method: 'post',
    body: {
      email,
    },
  })
}
