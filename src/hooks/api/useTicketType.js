import useAsync from '../useAsync';

import * as ticketTypeApi from '../../services/ticketTypeApi';
import useToken from '../useToken';

export default function useTicketType() {
  const token = useToken();

  const {
    data: ticketTypes,
    loading: ticketTypeLoading,
    error: ticketTypeError,
    act: getTicketTypes,
  } = useAsync(() => ticketTypeApi.getTicketTypes(token));

  return {
    ticketTypes,
    ticketTypeLoading,
    ticketTypeError,
    getTicketTypes,
  };
}
