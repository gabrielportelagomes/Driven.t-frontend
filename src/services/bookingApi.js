import api from './api';

async function fetchBooking(token) {
  try {
    const response = await api.get('/booking', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch bookings. ${error.message}`);
  }
}

async function saveBooking(body, token) {
  const response = await api.post('/booking', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export { fetchBooking, saveBooking };

