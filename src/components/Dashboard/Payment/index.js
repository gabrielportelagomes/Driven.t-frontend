import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import usePayment from '../../../hooks/api/useSavePayment';
import useTicket from '../../../hooks/api/useSaveTicket';
import useTicketType from '../../../hooks/api/useTicketType';
import Button from './Button';
import PaymentContainer from './PaymentContainer';
import PresencialModality from './PresencialModality';
import Summary from './Summary';

export default function TicketAndPayment() {
  const { ticketTypes } = useTicketType();
  const { payment } = usePayment();
  const { saveTicket } = useTicket();
  const [confirmedTicket, setConfirmedTicket] = useState(false);
  const [ticketType, setTicketType] = useState({
    id: null,
    name: null,
    price: null,
    isRemote: null,
    includesHotel: null,
    createdAt: null,
    updatedAt: null,
  });

  if (ticketTypes === null) {
    return <PaymentContainer></PaymentContainer>;
  }

  const ticketTypeModality = ticketTypes.map((ticket) => {
    if (!ticket.includesHotel) {
      return (
        <Button key={ticket.id} isSelected={ticket.id === ticketType.id} onClick={() => setTicketType(ticket)}>
          <h1>{ticket.name.split(' ')[0]}</h1>
          <p>R$ {ticket.price / 100}</p>
        </Button>
      );
    }
    return null;
  });

  //colocar no onclick do botão
  async function postTicket(ticketTypeId) {
    try {
      await saveTicket({ payment });
      toast('Pagamento realizado com sucesso!');
      setConfirmedTicket(true);
    } catch (error) {
      toast('Não foi possível salvar suas informações!');
    }
  }
  return (
    <>
      <PaymentContainer>
        <h1>Ingresso e Pagamento</h1>

        {!confirmedTicket ? (
          <>
            <p>Primeiro, escolha sua modalidade de ingresso</p>
            <div>{ticketTypeModality}</div>
            {(!ticketType.id && '') ||
              (ticketType.isRemote && <Summary ticket={ticketType} setConfirmedTicket={setConfirmedTicket} />) ||
              (ticketType.isRemote === false && (
                <>
                  <p style={{ margin: '44px 0 17px 0' }}>Ótimo, Agora escolha sua modalidade de hospedagem</p>{' '}
                  <PresencialModality ticketTypes={ticketTypes} setConfirmedTicket={setConfirmedTicket} />{' '}
                </>
              ))}
          </>
        ) : (
          '' //tela de pagamento
        )}
      </PaymentContainer>

      {
        <PaymentConfirm>
          <Icon />
          <Box>
            <p>Pagamento confirmado!</p>
            <span>Prossiga para escolha de hospedagem e atividades</span>
          </Box>
        </PaymentConfirm>
      }
    </>
  );
}

const PaymentConfirm = styled.div`
  display: flex;
  margin-top: 25px;
`;
const Icon = styled(BsFillCheckCircleFill)`
  color: #36b853;
  font-size: 48px;
`;
const Box = styled.div`
  margin-left: 10px;
  & > p {
    font-weight: 700;
    font-size: 18.8px;
    margin-bottom: 5px;
    color: #454545;
  }
  & > span {
    font-size: 17.5px;
    font-weight: 1;
    color: #454545;
  }
`;
