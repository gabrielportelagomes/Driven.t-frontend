import useAsync from '../useAsync';

import * as roomApi from '../../services/roomsApi.js';
import useToken from '../useToken';

export default function useRooms(hotelId) {
  const token = useToken();

  const {
    data: rooms,
    loading: roomLoading,
    error: roomError,
    act: getRooms,
  } = useAsync(() => roomApi.getRooms(token, hotelId));

  return {
    rooms,
    roomLoading,
    roomError,
    getRooms,
  };
}

