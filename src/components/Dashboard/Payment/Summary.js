import styled from 'styled-components';

export default function Summary({ ticket, setConfirmedTicket }) {
  return (
    <>
      <Text>
        Fechado! O total ficou em <span>R$ {ticket.price / 100}</span>. Agora é só confirmar:
      </Text>
      <Button onClick={() => setConfirmedTicket(true)}>RESERVAR INGRESSO</Button>
    </>
  );
}

const Text = styled.p`
  margin-top: 43px;
  font-size: 14px;
  font-weight: 400;
  color: #8e8e8e;
  margin-bottom: 17px;
  span {
    font-weight: 700;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 37px;
  border: none;
  border-radius: 4px;
  font-weight: 400;
  cursor: pointer;
  margin-top: 17px;
  font-size: 14px;
`;
