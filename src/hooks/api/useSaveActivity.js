import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivityType() {
  const token = useToken();

  const {
    data: activityType,
    loading: activityTypeLoading,
    error: activityTypeError,
    act: getActivityType,
  } = useAsync(() => activityApi.getActivityType(token));

  return {
    activityType,
    activityTypeLoading,
    activityTypeError,
    getActivityType,
  };
}
