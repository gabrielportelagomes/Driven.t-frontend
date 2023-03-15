import api from './api';

export async function getRooms(token, hotelId) {
  const response = await api.get(`/hotels/rooms/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
