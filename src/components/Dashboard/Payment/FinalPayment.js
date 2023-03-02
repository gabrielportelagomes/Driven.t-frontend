import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import ButtonSummary from './ButtonSummary';

export default function FinalPayment() {
  const { ticket } = useTicket();
  if (ticket) {
    const { name, price } = ticket.TicketType;
    return (
      <PaymentContainer>
        <p>Ingresso escolhido</p>
        <ButtonSummary>
          <h1>{name}</h1>
          <p>R$ {price / 100}</p>
        </ButtonSummary>
      </PaymentContainer>
    );
  }
  return '';
}

const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
  & > p {
    margin-bottom: 17px;
    font-size: 20px;
    color: #8e8e8e;
  }
`;
