import CustomButton from 'components/CustomButton';
import useRememberUserStatus from 'lib/hooks/rememberUserStatus';
import { useAuth } from 'lib/utils/auth';

const SignUp = ({ handleChange, formInfo }) => {
  const [rememberUserStatus, toggleRememberUserStatus] = useRememberUserStatus();
  const { authErrors } = useAuth();
  const { email, password, confirmPassword } = formInfo;

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
  };

  const handleChecked = () => toggleRememberUserStatus(email);

  return (
    <div>
      <form onSubmit={handleSubmit} className='space-y-6'>
        {authErrors && <div>Sorry, something went wrong. Please try again.</div>}
        <div>
          <label htmlFor='displayName' className='block text-sm font-medium text-gray-700'>
            Display Name
          </label>
          <div className='mt-1'>
            <input
              id='displayName'
              name='displayName'
              type='displayName'
              autoComplete='displayName'
              onChange={handleChange}
              required
              className='input input--text'
            />
          </div>
        </div>

        <div className='space-y-1'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email Address
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

        <div className='space-y-1'>
          <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
            Confirm Password
          </label>
          <div className='mt-1'>
            <input
              id='confirmPassword'
              name='confirmPassword'
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
          <CustomButton type='submit'> Sign up </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
