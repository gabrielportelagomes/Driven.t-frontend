import styled from 'styled-components';

export default function DayActivities({ activity }) {
  function calculateDuration() {
    const start = activity.schedules.split('-')[0];
    const end = activity.schedules.split('-')[1];

    const startHour = start.split(':')[0];
    const startMinute = start.split(':')[1];

    const endHour = end.split(':')[0];
    const endMinute = end.split(':')[1];

    const duration = 60 * (Number(endHour) - Number(startHour)) + (Number(endMinute) - Number(startMinute));

    return (duration / 60) * 80;
  }
  return (
    <ContainerPlace>
      <h1>{activity.place}</h1>
      <ContainerInformations>
        <ActivityInformation activityHeight={calculateDuration()}>
          <div>
            <h2>{activity.name}</h2>
            <p>{activity.schedules}</p>
          </div>
          <div></div>
          <p>vagas</p>
        </ActivityInformation>
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

const ActivityInformation = styled.div`
  background-color: #f1f1f1;
  width: 265px;
  height: ${(props) => `${props.activityHeight}px`};
  display: flex;
  padding: 10px;
  border-radius: 5px;

  div:nth-child(2) {
    width: 1px;
    height: ${(props) => `${props.activityHeight - 20}px`};
    background-color: #cfcfcf;
    margin-left: 20px;
    margin-right: 16px;
  }

  h2 {
    font-size: 12px;
    color: #343434;
    font-weight: 700;
    margin-bottom: 6px;
  }

  p {
    font-size: 12px;
    color: #343434;
  }
`;
