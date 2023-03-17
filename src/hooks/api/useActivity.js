import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useUserActivities() {
  const token = useToken();

  const {
    data: userActivities,
    loading: userActivitiesLoading,
    error: userActivitiesError,
    act: getUserActivities,
  } = useAsync(() => activityApi.getUserActivities(token));

  return {
    userActivities,
    userActivitiesLoading,
    userActivitiesError,
    getUserActivities,
  };
}
