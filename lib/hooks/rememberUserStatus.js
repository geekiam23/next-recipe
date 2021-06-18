import { saveToLocalStorage } from "lib/utils";
import { useState } from "react";

const useRememberUserStatus = () => {
  const [rememberUserStatus, setRememberUserStatus] = useState(false);

  const toggleRememberUserStatus = (email) => {
    if (!rememberUserStatus) {
      saveToLocalStorage('email', email)
    } else {
      saveToLocalStorage('email', null)
    }
    setRememberUserStatus(!rememberUserStatus)
  }

  return [rememberUserStatus, toggleRememberUserStatus];
}

export default useRememberUserStatus;