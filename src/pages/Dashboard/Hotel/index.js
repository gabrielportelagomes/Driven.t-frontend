import { useContext } from 'react';
import styled from 'styled-components';
import Hotel from '../../../components/Dashboard/Hotel/Hotel';
import UserContext from '../../../contexts/UserContext';
import useHotels from '../../../hooks/api/useHotels';

export default function HotelResume() {
  const { confirmedPayment } = useContext(UserContext);  
  const ticketModality = localStorage.getItem('ticket');
  const ticketModalityObject = JSON.parse(ticketModality);
  const { hotels } = useHotels();
    
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
          <p style = {{ width: '510px' }}>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</p>
        </div>
      </EmptyContainer>
    );
  }
  
  return <Hotel hotels={hotels}/>;
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
