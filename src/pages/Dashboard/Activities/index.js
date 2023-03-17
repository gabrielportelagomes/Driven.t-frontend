import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ChooseActivies from '../../../components/Dashboard/Activity/ChooseActivies';
import usePayment from '../../../hooks/api/usePayment';
import useActivityType from '../../../hooks/api/useActivityType';
import useTicket from '../../../hooks/api/useTicket';
import useUserActivities from '../../../hooks/api/useActivity';
import UserContext from '../../../contexts/UserContext';

export default function Activities() {
  const { ticket } = useTicket();
  const { getPayment } = usePayment();
  const { activityType } = useActivityType();
  const [confirmedPayment, setConfirmedPayment] = useState(false);
  const [filterActivity, setFilterActivity] = useState(undefined);
  const [isSelectedDay, setselectedDay] = useState(undefined);
  const { userActivities } = useUserActivities();
  const { setUserActivitiesData } = useContext(UserContext);

  useEffect(() => {
    if (userActivities) {
      setUserActivitiesData(userActivities);
    }
  }, [userActivities]);

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

  if (ticket && ticket.ticketTypeId === 1) {
    return (
      <EmptyContainer>
        <h1>Escolha de atividades</h1>
        <div>
          <p style={{ width: '510px' }}>
            Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
          </p>
        </div>
      </EmptyContainer>
    );
  }

  return (
    <ChooseActivies
      activityType={activityType}
      filterActivity={filterActivity}
      setFilterActivity={setFilterActivity}
      isSelectedDay={isSelectedDay}
      setselectedDay={setselectedDay}
    />
  );
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
