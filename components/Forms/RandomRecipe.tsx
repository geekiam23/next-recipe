import { Formik, useFormik, FormikErrors } from "formik";

import {
  CUISINES,
  DIETS,
  INTOLERANCES,
  MEAL_TYPES,
} from "../../lib/utils/constants";
// meal types, diets, cuisines, intolerances, number

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      //   text: initialText,
      //   buttonText: initialButtonText,
      //   includedInFutureServices: initialIncludedInFutureServices,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto">
        <svg
          className="absolute transform translate-x-1/2 left-full"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute bottom-0 transform -translate-x-1/2 right-full"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact sales
          </h2>
        </div>
        <div className="mt-12">
          <form onSubmit={formik.handleSubmit}>
            <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Diets
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {DIETS.map((diet) => {
                return (
                  <div key={diet.key}>
                    <label className="inline-flex items-center">
                      <input
                        name={diet.title}
                        onChange={formik.handleChange}
                        value={formik.values[diet.title]}
                        type="checkbox"
                        className="form-checkbox"
                      />
                      <span className="ml-2">{diet.title}</span>
                    </label>
                    <div className="mt-4 ml-8 text-gray-400">
                      {diet.description}
                    </div>
                  </div>
                );
              })}
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Meal Types
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {MEAL_TYPES.map((mealType) => {
                return (
                  <div key={mealType.key}>
                    <label className="inline-flex items-center">
                      <input
                        name={mealType.title}
                        onChange={formik.handleChange}
                        value={formik.values[mealType.title]}
                        type="checkbox"
                        className="form-checkbox"
                      />
                      <span className="ml-2">{mealType.title}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Cuisines
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {CUISINES.map((cuisine) => {
                return (
                  <div key={cuisine.key}>
                    <label className="inline-flex items-center">
                      <input
                        name={cuisine.title}
                        onChange={formik.handleChange}
                        value={formik.values[cuisine.title]}
                        type="checkbox"
                        className="form-checkbox"
                      />
                      <span className="ml-2">{cuisine.title}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Intolerances
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {INTOLERANCES.map((intolerance) => {
                return (
                  <div key={intolerance.key}>
                    <label className="inline-flex items-center">
                      <input
                        name={intolerance.title}
                        onChange={formik.handleChange}
                        value={formik.values[intolerance.title]}
                        type="checkbox"
                        className="form-checkbox"
                      />
                      <span className="ml-2">{intolerance.title}</span>
                    </label>
                  </div>
                );
              })}
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Lets talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
