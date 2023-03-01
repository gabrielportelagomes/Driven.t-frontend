import { useState } from 'react';
import Button from './Button';
import PaymentContainer from './PaymentContainer';
import Summary from './Summary';

export default function PresencialModality({ ticketTypes, setConfirmedTicket }) {  
  const [ticketType, setTicketType] = useState({
    id: null,
    name: null,
    price: null,
    isRemote: null,
    includesHotel: null,
    createdAt: null,
    updatedAt: null,
  });
  
  const ticketHosting = ticketTypes.map((ticket) => {
    if (!ticket.isRemote) {
      return (
        <Button
          key={ticket.id}
          isSelected={ticket.id === ticketType.id} onClick={() => setTicketType(ticket)}
        >
          <h1>{ticket.name.slice(11)}</h1>
          <p> + R$ {ticket.price / 100 - 250}</p>
        </Button>
      );
    }
    return null;
  });
  
  return (    
    <>
      <PaymentContainer>       
        <div>{ticketHosting}</div> 
      </PaymentContainer>
      {ticketType.price > 250 ? <Summary ticket={ticketType} setConfirmedTicket={setConfirmedTicket}/> : ''}
    </>
  );
}
