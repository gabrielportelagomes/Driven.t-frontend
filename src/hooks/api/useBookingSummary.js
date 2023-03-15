import useAsync from '../useAsync';

import * as bookingApi from '../../services/bookingApi';
import useToken from '../useToken';

export default function useBookingSummary() {
  const token = useToken();

  const {
    data: bookingSummary,
    loading: bookingSummaryLoading,
    error: bookingSummaryError,
    act: getbookingSummary,
  } = useAsync(() => bookingApi.getBookingSummary(token));

  return {
    bookingSummary,
    bookingSummaryLoading,
    bookingSummaryError,
    getbookingSummary,
  };
}
