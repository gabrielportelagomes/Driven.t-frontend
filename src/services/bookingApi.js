import api from './api';

export async function bookingApi(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
