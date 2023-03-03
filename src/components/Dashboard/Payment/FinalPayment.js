import { useState } from 'react';
import styled from 'styled-components';
import useSavePayment from '../../../hooks/api/useSavePayment';
import useTicket from '../../../hooks/api/useTicket';
import ButtonSummary from './ButtonSummary';
import PaymentForm from './PaymentForm';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function FinalPayment() {
  const { ticket } = useTicket();
  const { savePayment } = useSavePayment();
  const [confirmPayment, setConfirmPayment] = useState(false);

  if (ticket) {
    const { name, price } = ticket.TicketType;
    return (
      <PaymentContainer>
        <p>Ingresso escolhido</p>
        <ButtonSummary>
          <h1>{name}</h1>
          <p>R$ {price / 100}</p>
        </ButtonSummary>
        {confirmPayment ? (
          <PaymentConfirm>
            <h6>Pagamento</h6>
            <div>
              <Icon />
              <Box>
                <p>Pagamento confirmado!</p>
                <span>Prossiga para escolha de hospedagem e atividades</span>
              </Box>
            </div>
          </PaymentConfirm>
        ) : (
          <PaymentForm
            ticket={ticket}
            savePayment={savePayment}
            confirmPayment={confirmPayment}
            setConfirmPayment={setConfirmPayment}
          />
        )}
      </PaymentContainer>
    );
  }
  return <></>;
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

const PaymentConfirm = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  & > div {
    display: flex;
  }
  & > h6 {
    margin-bottom: 15px;
    font-size: 20px;
    color: #8e8e8e;
  }
`;
const Icon = styled(BsFillCheckCircleFill)`
  color: #36b853;
  font-size: 48px;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
  & > p {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 5px;
    color: #454545;
  }
  & > span {
    font-size: 16px;
    font-weight: 400;
    color: #454545;
  }
`;
