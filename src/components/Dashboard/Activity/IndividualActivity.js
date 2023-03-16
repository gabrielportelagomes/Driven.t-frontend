import styled from 'styled-components';

export default function IndividualActivity({ activity }) {
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
    <ActivityInformation activityHeight={calculateDuration()}>
      <div>
        <h2>{activity.name}</h2>
        <p>{activity.schedules}</p>
      </div>
      {activity.capacity !== 0 ? (
        <Vacancy style={{ fontSize: '30px', color: '#078632' }}>
          <div>
            <ion-icon name="log-in-outline"></ion-icon>
          </div>
          <p style={{ color: '#078632' }}>{activity.capacity} vagas</p>
        </Vacancy>
      ) : (
        <Vacancy disabled={true}>
          <div>
            <ion-icon style={{ fontSize: '30px', color: 'red' }} name="close-circle-outline"></ion-icon>
          </div>
          <p style={{ color: 'red' }}>Esgotado</p>
        </Vacancy>
      )}
    </ActivityInformation>
  );
}

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
    width: 75px;
    font-size: 12px;
    color: #343434;
  }
`;
const Vacancy = styled.button`
  border: none;
  border-left: 1px solid #cfcfcf;
  cursor: pointer;
  margin-left: 5px;
`;
