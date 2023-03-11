import useAsync from '../useAsync';

import * as bookingApi from '../../services/bookingApi';
import useToken from '../useToken';

export default function useBookingByRoomId() {
  const token = useToken();

  const {
    data: bookingByRoomId,
    loading: bookingByRoomIdLoading,
    error: bookingByRoomIdError,
    act: getBookingByRoomId,
  } = useAsync((data) => bookingApi.getBookingByRoomId(token, data));

  return {
    bookingByRoomId,
    bookingByRoomIdLoading,
    bookingByRoomIdError,
    getBookingByRoomId,
  };
}
