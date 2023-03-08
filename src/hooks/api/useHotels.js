import useAsync from '../useAsync';

import * as hotelsApi from '../../services/hotelApi';
import useToken from '../useToken';

export default function useHotels() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelLoading,
    error: hotelError,
    act: getHotels,
  } = useAsync(() => hotelsApi.getHotels(token));

  return {
    hotels,
    hotelLoading,
    hotelError,
    getHotels,
  };
}
