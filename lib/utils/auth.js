import React, { useState, useEffect, useContext, createContext } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { GET_USER_QUERY } from './queries';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authErrors, setAuthErrors] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const isSignedIn = userInfo?.getUser.id;

  const [userToken, setUserToken] = useState(null);

  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const router = useRouter();
  const [queryCurrentUser] = useLazyQuery(GET_USER_QUERY, {
    context: {
      headers: {
        Authorization: userToken ? userToken : cookies?.user,
      },
    },
    onCompleted: data => {
      setUserInfo(data);
    },
    onError: err => {
      console.log(err);
    },
  });

  useEffect(() => {
    if (cookies?.user) {
      const token = jwtDecode(cookies?.user);
      queryCurrentUser({ variables: { id: token.sub } });
    }
  }, []);

  useEffect(() => {
    if (userToken) {
      const token = jwtDecode(userToken);
      queryCurrentUser({ variables: { id: token.sub } });
    }
  }, [userToken]);

  const signOut = async () => {
    try {
      await axios.delete(process.env.NEXT_PUBLIC_API_AUTH_URL + '/sign_out', {
        headers: {
          authorization: cookies?.user,
        },
      });
      removeCookie('user');
      setUserInfo(null);
      router.push('/session');
    } catch {
      e => setAuthErrors(e);
    }
  };

  const signIn = ({ email, password }) => {
    axios
      .post(process.env.NEXT_PUBLIC_API_AUTH_URL + '/sign_in', {
        user: {
          email: email,
          password: password,
        },
      })
      .then(response => {
        const token = response?.headers?.authorization;

        setCookie('user', token, {
          path: '/',
          maxAge: 604800, // Expires after 1wk
          sameSite: true,
        });
        setUserToken(response?.headers?.authorization);
        router.push('/favorites');
      })
      .catch(e => setAuthErrors(e));
  };

  return (
    <AuthContext.Provider
      value={{
        authErrors,
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
