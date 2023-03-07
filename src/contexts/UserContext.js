import { useState } from 'react';
import { createContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [confirmedPayment, setConfirmedPayment] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData, confirmedPayment, setConfirmedPayment }}>
      {children}
    </UserContext.Provider>
  );
}
