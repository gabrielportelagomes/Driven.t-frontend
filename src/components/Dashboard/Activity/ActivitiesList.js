import styled from 'styled-components';
import DayActivities from './DayActivities';

export default function ActivitiesList({ filterActivity, activityType }) {
  if (!filterActivity) {
    return <></>;
  }
  const activitiesDay = activityType.filter((item) => filterActivity === item.activityDate);
  const place1 = activitiesDay.filter((item) => item.place === 'Auditório Principal');
  const place2 = activitiesDay.filter((item) => item.place === 'Auditório Lateral');
  const place3 = activitiesDay.filter((item) => item.place === 'Sala de Workshop');
  console.log(activitiesDay);

  return (
    <Activities>
      <DayActivities activity={place1} name='Auditório Principal' />
      <DayActivities activity={place2} name='Auditório Lateral' />
      <DayActivities activity={place3} name='Sala de Workshop' />
    </Activities>
  );
}

const Activities = styled.div`
  display: flex;
  margin-top: 66px;
`;
