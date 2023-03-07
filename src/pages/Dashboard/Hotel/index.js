import { useContext } from 'react';
import styled from 'styled-components';
import Hotel from '../../../components/Dashboard/Hotel/Hotel';
import UserContext from '../../../contexts/UserContext';

export default function HotelResume() {
  const { confirmedPayment } = useContext(UserContext);
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
  return <Hotel />;
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
