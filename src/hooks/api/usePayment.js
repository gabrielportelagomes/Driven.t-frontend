import useAsync from '../useAsync';

import * as paymentApi from '../../services/paymentApi';
import useToken from '../useToken';

export default function usePayment() {
  const token = useToken();

  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: getPayment,
  } = useAsync((data) => paymentApi.getPayment(data, token), false);

  return {
    payment,
    paymentLoading,
    paymentError,
    getPayment,
  };
}
