import React, { useState, useContext, createContext } from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from '@apollo/client'
import { useRouter } from 'next/router';

const authContext = createContext()

export function AuthProvider({ children }) {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null)
  const [authErrors, setAuthErrors] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const router = useRouter()

  const getAuthHeaders = () => {
    if (!authToken) return null

    return {
      authorization: `Bearer ${authToken}`,
    }
  }

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: 'http://localhost:3000/graphql',
      headers: getAuthHeaders(),
    })

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    })
  }

  const signOut = () => {
    setAuthToken(null)
    router.push('/session')
  }

  const signIn = async ({email, password}) => {
    const client = createApolloClient()
    const LoginMutation = gql`
      mutation SignMeIn($email: String!, $password: String!) {
        signInMutation(email: $email, password: $password) {
          token
          success
          errors {
            message
          }
          user {
            id
          }
        }
      }
    `

    const result = await client.mutate({
      mutation: LoginMutation,
      variables: {
          email,
          password
      }
    })

    if (result?.data?.signInMutation?.token) {
      setAuthToken(result.data.signInMutation.token)
      setUserInfo(result.data.signInMutation.user)
      router.push('/recipes')
    } else {
      setAuthErrors(result?.data?.signInMutation?.errors)
    }
  }

  const isSignedIn = () => {
    if (authToken) {
      return true
    } else {
      return false
    }
  }

  return {
    authErrors,
    createApolloClient,
    isSignedIn,
    signIn,
    signOut,
    userInfo
  }
}