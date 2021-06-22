import { useState } from 'react';

import { saveToLocalStorage } from 'lib/utils';

const useRememberUserStatus = (): [boolean, (email: string) => void] => {
  const [rememberUserStatus, setRememberUserStatus] = useState(false);

  const toggleRememberUserStatus = (email: string): void => {
    if (!rememberUserStatus) {
      saveToLocalStorage('email', email);
    } else {
      saveToLocalStorage('email', null);
    }
    setRememberUserStatus(!rememberUserStatus);
  };

  return [rememberUserStatus, toggleRememberUserStatus];
};

export default useRememberUserStatus;
