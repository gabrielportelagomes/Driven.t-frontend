import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivityInscriptions(activityTypeId) {
  const token = useToken();

  const {
    data: InscriptionsActivity,
    loading: InscriptionsActivitiesLoading,
    error: InscriptionsActivitiesError,
    act: getActivityInscriptions,
  } = useAsync(() => activityApi.getActivityInscriptions(token, activityTypeId));

  return {
    InscriptionsActivity,
    InscriptionsActivitiesLoading,
    InscriptionsActivitiesError,
    getActivityInscriptions,
  };
}
