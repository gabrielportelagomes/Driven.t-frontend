import * as bookingApi from '../../services/bookingApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useSaveBooking() {
  const token = useToken();

  const {
    data: booking,
    loading: saveBookingLoading,
    error: saveBookingError,
    act: saveBooking,
  } = useAsync((data) => bookingApi.saveBooking(data, token), false);

  return {
    booking,
    saveBookingLoading,
    saveBookingError,
    saveBooking,
  };
}
