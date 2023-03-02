import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function useSavePayment() {
  const token = useToken();
  const {
    data: payment,
    loading: savePaymentLoading,
    error: savePaymentError,
    act: savePayment,
  } = useAsync((data) => paymentApi.savePayment(data, token), false);

  return {
    payment,
    savePaymentLoading,
    savePaymentError,
    savePayment,
  };
}
