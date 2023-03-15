import styled from 'styled-components';
import DayActivities from './DayActivities';

export default function ActivitiesList({ filterActivity, activityType }) {
  if (!filterActivity) {
    return <></>;
  }
  return (
    <Activities>
      {activityType.map((activity) => (
        <DayActivities key={activity.id} activity={activity} />
      ))}
    </Activities>
  );
}

const Activities = styled.div`
  display: flex;
  margin-top: 66px;
`;
