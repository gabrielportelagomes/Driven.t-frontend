import { useEffect, useState } from 'react';
import styled from 'styled-components';
import usePayment from '../../../hooks/api/usePayment';
import useTicket from '../../../hooks/api/useTicket';

export default function Activities() {
  const { ticket } = useTicket();
  const { getPayment } = usePayment();
  const [confirmedPayment, setConfirmedPayment] = useState(false);

  useEffect(() => {
    if (ticket) {
      getPayment(ticket.id)
        .then((response) => {
          setTimeout(() => setConfirmedPayment(true), 0);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ticket]);

  if (!confirmedPayment) {
    return (
      <EmptyContainer>
        <h1>Escolha de atividades</h1>
        <div>
          <p style={{ width: '480px' }}>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</p>
        </div>
      </EmptyContainer>
    );
  }

  return <></>;
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
