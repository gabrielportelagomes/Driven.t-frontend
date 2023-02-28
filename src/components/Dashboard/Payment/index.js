import { useState } from 'react';

import useTicketType from '../../../hooks/api/useTicketType';
import Button from './Button';
import PaymentContainer from './PaymentContainer';

export default function TicketAndPayment() {
  const { ticketTypes } = useTicketType();
  const [ticketTypeId, setTicketTypeId] = useState();

  if (ticketTypes === null) {
    return <PaymentContainer></PaymentContainer>;
  }

  const ticketTypeModality = ticketTypes.map((ticketType) => {
    if (!ticketType.includesHotel) {
      return (
        <Button
          key={ticketType.id}
          isSelected={ticketTypeId === ticketType.id}
          onClick={() => setTicketTypeId(ticketType.id)}
        >
          <h1>{ticketType.name.split(' ')[0]}</h1>
          <p>R$ {ticketType.price / 100}</p>
        </Button>
      );
    }
    return null;
  });

  return (
    <>
      <PaymentContainer>
        <h1>Ingresso e Pagamento</h1>
        <p>Primeiro, escolha sua modalidade de ingresso</p>
        <div>{ticketTypeModality}</div>
      </PaymentContainer>
    </>
  );
}
