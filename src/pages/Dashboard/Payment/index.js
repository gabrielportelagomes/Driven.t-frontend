import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import TicketAndPayment from '../../../components/Dashboard/Payment';
import useTicket from '../../../hooks/api/useTicket';
import FinalPayment from '../../../components/Dashboard/Payment/FinalPayment';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const { ticket } = useTicket();

  if (!enrollment) {
    return (
      <EmptyContainer>
        <h1>Ingresso e pagamento</h1>
        <div>
          <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
        </div>
      </EmptyContainer>
    );
  }

  if (ticket !== null) {
    return (
      <TicketContainer>
        <h1>Ingresso e pagamento</h1>
        <FinalPayment />
      </TicketContainer>
    );
  }

  return <TicketAndPayment />;
}

const EmptyContainer = styled.div`
  height: 100%;
  & > div {
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    & > p {
      width: 420px;
      color: #8e8e8e;
      font-size: 20px;
      font-weight: 400;
      text-align: center;
    }
  }
  & > h1 {
    font-size: 34px;
    font-weight: 400;
  }
`;

const TicketContainer = styled.div`
  &>h1{
    margin-bottom: 37px;
    font-size: 34px;
  }
`;
