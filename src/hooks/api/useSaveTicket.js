import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useSaveTicket() {
  const token = useToken();

  const {
    data: ticket,
    loading: saveTicketLoading,
    error: saveTicketError,
    act: saveTicket,
  } = useAsync((data) => ticketApi.saveTicket(data, token), false);

  return {
    ticket,
    saveTicketLoading,
    saveTicketError,
    saveTicket,
  };
}
