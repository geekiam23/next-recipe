
import CustomButton from "components/CustomButton";
import { useState } from "react";

// TODO: connect forgot password
// TODO: set up remember me through persisting
// TODO: break forgot password and remember me into a separate component

const SignUp = ({ handleChange, user, setUser }) => {
  // const history = useHistory();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });

    //   setUser({
    //     displayName: "",
    //     email: "",
    //     password: null,
    //     confirmPassword: null,
    //   });

    //   history.push("/");
    //   setError(null);
    // } catch (error) {
    //   setError(error);
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div>Sorry, something went wrong. Please try again.</div>}
        <div>
          <label
            htmlFor="displayName"
            className="block text-sm font-medium text-gray-700"
          >
            Display Name
          </label>
          <div className="mt-1">
            <input
              id="displayName"
              name="displayName"
              type="displayName"
              autoComplete="displayName"
              onChange={handleChange}
              required
              className="input input--text"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={handleChange}
              required
              className="input input--text"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              required
              className="input input--text"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="mt-1">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              required
              className="input input--text"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="input input--checkbox"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <CustomButton type="submit"> Sign up </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
