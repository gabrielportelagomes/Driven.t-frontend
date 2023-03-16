import styled from 'styled-components';
import IndividualActivity from './IndividualActivity';

export default function DayActivities({ activity, name }) {
  return (
    <ContainerPlace>
      <h1>{name}</h1>
      <ContainerInformations>
        {activity.map((activity) => (
          <IndividualActivity key={activity.id} activity={activity} />
        ))}
      </ContainerInformations>
    </ContainerPlace>
  );
}

const ContainerPlace = styled.div`
  width: 288px;
  & > h1 {
    text-align: center;
    font-size: 17px;
    color: #7b7b7b;
  }
`;

const ContainerInformations = styled.div`
  width: 288px;
  height: 390px;
  border: 1px solid #d7d7d7;
  margin-top: 13px;
  padding: 10px;
`;
