import api from './api';

export async function githubAuth(body) {
  const response = await api.post('/auth/github', body);
  return response.data;
}
