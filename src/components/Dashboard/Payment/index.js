import { useState } from 'react';
import useTicketType from '../../../hooks/api/useTicketType';
import Button from './Button';
import PaymentContainer from './PaymentContainer';
import PresencialModality from './PresencialModality';
import Summary from './Summary';
import PaymentForm from './PaymentForm';

export default function TicketAndPayment() {
  const { ticketTypes } = useTicketType();
  const [confirmedTicket, setConfirmedTicket] = useState(false);
  const [ticketType, setTicketType] = useState({
    id: null,
    name: null,
    price: null,
    isRemote: null,
    includesHotel: null,
    createdAt: null,
    updatedAt: null,
  });

  if (ticketTypes === null) {
    return <PaymentContainer></PaymentContainer>;
  }

  const ticketTypeModality = ticketTypes.map((ticket) => {
    if (!ticket.includesHotel) {
      return (
        <Button key={ticket.id} isSelected={ticket.id === ticketType.id} onClick={() => setTicketType(ticket)}>
          <h1>{ticket.name.split(' ')[0]}</h1>
          <p>R$ {ticket.price / 100}</p>
        </Button>
      );
    }
    return null;
  });

  return (
    <>
      <PaymentContainer>
        <h1>Ingresso e Pagamento</h1>
        {!confirmedTicket ? (
          <>
            <p>Primeiro, escolha sua modalidade de ingresso</p>
            <div>{ticketTypeModality}</div>
            {(!ticketType.id && '') ||
              (ticketType.isRemote && <Summary ticket={ticketType} setConfirmedTicket={setConfirmedTicket} />) ||
              (ticketType.isRemote === false && (
                <>
                  <p style={{ margin: '44px 0 17px 0' }}>Ótimo, Agora escolha sua modalidade de hospedagem</p>{' '}
                  <PresencialModality ticketTypes={ticketTypes} setConfirmedTicket={setConfirmedTicket} />{' '}
                </>
              ))}
          </>
        ) : (
          <PaymentForm />
        )}
      </PaymentContainer>
    </>
  );
}
