export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return $fetch('/api/auth/login', {
    method: 'post',
    body: {
      email,
      password,
    },
  });
};
