import React, { useState, useEffect, useContext, createContext } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

import { GET_USER_QUERY, LOGIN_MUTATION, LOGOUT_MUTATION } from './queries';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authErrors, setAuthErrors] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const router = useRouter();
  const [queryCurrentUser] = useLazyQuery(GET_USER_QUERY, {
    variables: {
      id: cookies?.user?.user.id,
    },
    onCompleted: data => {
      setUserInfo(data);
    },
    onError: err => {
      console.log(err);
    },
  });

  const [userLogin] = useMutation(LOGIN_MUTATION, {
    onError: err => {
      console.log(err);
    },
  });
  const [userLogout] = useMutation(LOGOUT_MUTATION, {
    onError: err => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (cookies?.user) {
      queryCurrentUser();
    }
  }, []);

  const userToken = cookies?.user?.token ?? null;
  const isSignedIn = userInfo?.getUser.id;

  const signOut = async () => {
    // TODO: Fix bug where it continues to hit api loop
    try {
      const result = await userLogout();
      removeCookie('user');
      router.push('/recipes');
    } catch (e) {
      console.log(e);
    }
  };

  const signIn = async ({ email, password }) => {
    const result = await userLogin({ variables: { email, password } });

    const loginData = result?.data?.signInMutation;
    if (loginData?.token) {
      queryCurrentUser();
      setCookie('user', JSON.stringify(loginData), {
        path: '/',
        maxAge: 86400, // Expires after 24hr
        sameSite: true,
      });
      router.push('/favorites');
    } else {
      setAuthErrors(result?.data?.signInMutation?.errors);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authErrors,
        userToken,
        signIn,
        signOut,
        userInfo,
        isSignedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
