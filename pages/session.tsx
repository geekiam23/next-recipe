import { useState } from "react";
import Image from 'next/image'
import { useAuth } from '../lib/utils/auth.js'

// import googleIcon from "assets/google.png";
// import foodCollage from "../assets/food-collage.jpg";
import FacebookIcon from "components/icons/facebook";
import TwitterIcon from "components/icons/twitter";
import GithubIcon from "components/icons/github";
import Signin from "components/SignIn";
import SignUp from "components/SignUp";

const SignInAndSingUp = () => {
  const [formInfo, setFormInfo] = useState({
    email: "",
    password: null,
    confirmPassword: null,
  });


  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormInfo({ ...formInfo, [name]: value });
  };
  const { isSignedIn } = useAuth()
  
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {isSignedIn
                ? "Sign in to your account"
                : "Sign up for new account"}
            </h2>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Sign in with
                </p>

                <div className="grid grid-cols-4 gap-3 mt-1">
                  <div>
                    <div
                      // onClick={signInWithGoogle}
                      className="btn btn-signin-logo"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <Image src="/google.png" alt="me" width="20" height="20" />
                    </div>
                  </div>

                  <div>
                    <div
                      // onClick={signInWithFacebook}
                      className="btn btn-signin-logo"
                    >
                      <span className="sr-only">Sign in with Facebook</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <FacebookIcon size="w-5 h-5" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div
                      // onClick={signInWithTwitter}
                      className="btn btn-signin-logo"
                    >
                      <span className="sr-only">Sign in with Twitter</span>
                      <TwitterIcon size="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <div
                      // onClick={signInWithGithub}
                      className="btn btn-signin-logo"
                    >
                      <span className="sr-only">Sign in with GitHub</span>
                      <GithubIcon size="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mt-6">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <div
                    // onClick={() => setIsSignInPage(!isSignInPage)}
                    className="px-2 text-gray-500 bg-white"
                  >
                    {isSignedIn
                      ? "Or create a new account"
                      : "Or sign in to an existing page"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              {isSignedIn ? (
                <Signin
                  handleChange={handleChange}
                  formInfo={formInfo}
                />
              ) : (
                <SignUp
                  handleChange={handleChange}
                  formInfo={formInfo}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInAndSingUp;
