const baseURL = 'https://jsonplaceholder.typicode.com';

export type User = {
  id: number;
  name: string;
  usernam: string;
  website: string;

  [x: string]: any;
};

export const useUser = () => {
  const all = (options?: Record<string, any>) => {
    return useApi<User[]>('/users', {
      baseURL,
      ...options,
    });
  };

  const create = (payload: Record<string, any>) => {
    return useApi('/users', {
      body: payload,
      method: 'POST',
      baseURL,
    });
  };

  const find = (id: string) => {
    return useApi<User>(`/users/${id}`, {
      baseURL,
    });
  };

  const update = (id: string, payload: Record<string, any>) => {
    return useApi(`/users/${id}`, {
      body: payload,
      method: 'PUT',
      baseURL,
    });
  };

  const remove = (id: string) => {
    return useApi(`/users/${id}`, {
      method: 'DELETE',
      baseURL,
    });
  };

  return { all, create, find, update, remove };
};
