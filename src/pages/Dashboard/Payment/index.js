import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import PaymentContainer from '../../../components/Dashboard/Payment/PaymentContainer';
import Button from '../../../components/Dashboard/Payment/Button';

export default function Payment() {
  const { enrollment } = useEnrollment();

  if (!enrollment) {
    return (
      <EmptyContainer>
        <h1>Ingresso e pagamento</h1>
        <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
      </EmptyContainer>
    );
  }

  return (
    <PaymentContainer>
      <h1>Ingresso e Pagamento</h1>
      <p>Primeiro, escolha sua modalidade de ingresso</p>
      <div>
        <Button>
          <h1>Presencial</h1>
          <p>R$ 250</p>
        </Button>
        <Button>
          <h1>Online</h1>
          <p>R$ 100</p>
        </Button>
      </div>
    </PaymentContainer>
  );
}

const EmptyContainer = styled.div`
  & > p {
    color: #8e8e8e;
    font-size: 20px;
    font-weight: 400;
    margin: 200px auto 0;
    width: 420px;
  }
  & > h1 {
    font-size: 34px;
    font-weight: 400;
  }
`;
