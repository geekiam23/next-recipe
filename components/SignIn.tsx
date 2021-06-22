import { FormEvent } from 'react';

import { useAuth } from '../lib/utils/auth.js';
import useRememberUserStatus from '../lib/hooks/rememberUserStatus';
import CustomButton from './CustomButton';
import { SessionInfo } from 'types/index.js';

const Signin: React.FC<SessionInfo> = ({ handleChange, formInfo }) => {
  const { authErrors, signIn } = useAuth();
  const [rememberUserStatus, toggleRememberUserStatus] = useRememberUserStatus();

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    signIn({ email: formInfo.email, password: formInfo.password });
  };

  const handleChecked = (): void => toggleRememberUserStatus(formInfo.email);

  return (
    <div>
      <form onSubmit={onSubmit} className='space-y-6'>
        {authErrors && <div>Sorry, something went wrong. Please try again.</div>}
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email address
          </label>
          <div className='mt-1'>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              onChange={handleChange}
              required
              className='input input--text'
            />
          </div>
        </div>

        <div className='space-y-1'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
            Password
          </label>
          <div className='mt-1'>
            <input
              id='password'
              name='password'
              type='password'
              onChange={handleChange}
              required
              className='input input--text'
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <input
              id='remember_me'
              name='remember_me'
              type='checkbox'
              checked={!!rememberUserStatus}
              onChange={handleChecked}
              className='input input--checkbox'
            />
            <label htmlFor='remember_me' className='block ml-2 text-sm text-gray-900'>
              Remember me
            </label>
          </div>

          <div className='text-sm'>
            <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <div className='grid grid-cols-2 gap-3 mt-1'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton
            // onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
