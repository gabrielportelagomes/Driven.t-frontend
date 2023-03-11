import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Hotel from '../../../components/Dashboard/Hotel/Hotel';
import UserContext from '../../../contexts/UserContext';
import useHotels from '../../../hooks/api/useHotels';
import useTicket from '../../../hooks/api/useTicket';
import useToken from '../../../hooks/useToken';
import { getPayment } from '../../../services/paymentApi';

export default function HotelResume() {
  const [confirmedPayment, setConfirmedPayment] = useState(false);
  const ticketModality = localStorage.getItem('ticket');
  const ticketModalityObject = JSON.parse(ticketModality);
  const { hotels } = useHotels();
  const token = useToken();
  const { ticket } = useTicket();

  useEffect(() => {
    if (ticket) {
      getPayment(ticket.id, token)
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
        <h1>Escolha de hotel e quarto</h1>
        <div>
          <p>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</p>
        </div>
      </EmptyContainer>
    );
  }
  if (ticketModalityObject.ticketTypeId === 1 || ticketModalityObject.ticketTypeId === 2) {
    return (
      <EmptyContainer>
        <h1>Escolha de hotel e quarto</h1>
        <div>
          <p style={{ width: '510px' }}>
            Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades
          </p>
        </div>
      </EmptyContainer>
    );
  }

  return <Hotel hotels={hotels} />;
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
