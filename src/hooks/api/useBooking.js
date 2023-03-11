import useAsync from '../useAsync';

import * as bookingApi from '../../services/bookingApi';
import useToken from '../useToken';

export default function useBookingByRoomId(data) {
  const token = useToken();

  const {
    data: bookingByRoomId,
    loading: bookingByRoomIdLoading,
    error: bookingByRoomIdError,
    act: getBookingByRoomId,
  } = useAsync(() => bookingApi.getBookingByRoomId(token, data));

  return {
    bookingByRoomId,
    bookingByRoomIdLoading,
    bookingByRoomIdError,
    getBookingByRoomId,
  };
}
