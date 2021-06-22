import { ReactElement } from 'react';

//TODO: Break into smaller components
const Landing = (): ReactElement => {
  return (
    <div className='h-screen bg-white'>
      <div className='relative overflow-hidden'>
        <main>
          {/* <!-- Feature section with screenshot --> */}
          <div className='relative pt-10 bg-gray-50'>
            <div className='max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
              <div>
                <h2 className='text-base font-semibold tracking-wider uppercase text-cyan-600'>
                  Serverless
                </h2>
                <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  No server? No problem.
                </p>
                <p className='mx-auto mt-5 text-xl text-gray-500 max-w-prose'>
                  Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis
                  quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
                </p>
              </div>
              <div className='mt-12 -mb-10 sm:-mb-24 lg:-mb-80'>
                <img
                  className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
                  src='https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>

          {/* <!-- Feature section with grid --> */}
          <div className='relative py-16 bg-white sm:py-24 lg:py-32'>
            <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
              <h2 className='text-base font-semibold tracking-wider uppercase text-cyan-600'>
                Deploy faster
              </h2>
              <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                Everything you need to deploy your app
              </p>
              <p className='mx-auto mt-5 text-xl text-gray-500 max-w-prose'>
                Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis
                nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
              </p>
              <div className='mt-12'>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                  <div className='pt-6'>
                    <div className='flow-root px-6 pb-8 rounded-lg bg-gray-50'>
                      <div className='-mt-6'>
                        <div>
                          <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600'>
                            {/* <!-- Heroicon name: outline/cloud-upload --> */}
                            <svg
                              className='w-6 h-6 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              />
                            </svg>
                          </span>
                        </div>
                        <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                          Push to Deploy
                        </h3>
                        <p className='mt-5 text-base text-gray-500'>
                          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
                          sit morbi vitae lobortis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='pt-6'>
                    <div className='flow-root px-6 pb-8 rounded-lg bg-gray-50'>
                      <div className='-mt-6'>
                        <div>
                          <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600'>
                            {/* <!-- Heroicon name: outline/lock-closed --> */}
                            <svg
                              className='w-6 h-6 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                              />
                            </svg>
                          </span>
                        </div>
                        <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                          SSL Certificates
                        </h3>
                        <p className='mt-5 text-base text-gray-500'>
                          Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur.
                          Temporibus qui illum aut.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='pt-6'>
                    <div className='flow-root px-6 pb-8 rounded-lg bg-gray-50'>
                      <div className='-mt-6'>
                        <div>
                          <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600'>
                            {/* <!-- Heroicon name: outline/refresh --> */}
                            <svg
                              className='w-6 h-6 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                              />
                            </svg>
                          </span>
                        </div>
                        <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                          Simple Queues
                        </h3>
                        <p className='mt-5 text-base text-gray-500'>
                          Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus
                          ut odit dolores qui.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='pt-6'>
                    <div className='flow-root px-6 pb-8 rounded-lg bg-gray-50'>
                      <div className='-mt-6'>
                        <div>
                          <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600'>
                            {/* <!-- Heroicon name: outline/shield-check --> */}
                            <svg
                              className='w-6 h-6 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                              />
                            </svg>
                          </span>
                        </div>
                        <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                          Advanced Security
                        </h3>
                        <p className='mt-5 text-base text-gray-500'>
                          Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos
                          suscipit perspiciatis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='pt-6'>
                    <div className='flow-root px-6 pb-8 rounded-lg bg-gray-50'>
                      <div className='-mt-6'>
                        <div>
                          <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600'>
                            {/* <!-- Heroicon name: outline/cog --> */}
                            <svg
                              className='w-6 h-6 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                              />
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                              />
                            </svg>
                          </span>
                        </div>
                        <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                          Powerful API
                        </h3>
                        <p className='mt-5 text-base text-gray-500'>
                          Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis
                          labore quaerat ipsum quaerat id.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='pt-6'>
                    <div className='flow-root px-6 pb-8 rounded-lg bg-gray-50'>
                      <div className='-mt-6'>
                        <div>
                          <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-500 to-cyan-600'>
                            {/* <!-- Heroicon name: outline/server --> */}
                            <svg
                              className='w-6 h-6 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
                              />
                            </svg>
                          </span>
                        </div>
                        <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                          Database Backups
                        </h3>
                        <p className='mt-5 text-base text-gray-500'>
                          Quia qui et est officia cupiditate qui consectetur. Ratione similique et
                          impedit ea ipsum et.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Blog section --> */}
          <div className='relative py-16 bg-gray-50 sm:py-24 lg:py-32'>
            <div className='relative'>
              <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
                <h2 className='text-base font-semibold tracking-wider uppercase text-cyan-600'>
                  Learn
                </h2>
                <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  Helpful Resources
                </p>
                <p className='mx-auto mt-5 text-xl text-gray-500 max-w-prose'>
                  Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis
                  quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.
                </p>
              </div>
              <div className='grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
                <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className='flex-shrink-0'>
                    <img
                      className='object-cover w-full h-48'
                      src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=85UtzwEpvS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                    <div className='flex-1'>
                      <p className='text-sm font-medium text-cyan-600'>
                        <a href='#' className='hover:underline'>
                          Article
                        </a>
                      </p>
                      <a href='#' className='block mt-2'>
                        <p className='text-xl font-semibold text-gray-900'>
                          Boost your conversion rate
                        </p>
                        <p className='mt-3 text-base text-gray-500'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                          accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos
                          quis dolorum.
                        </p>
                      </a>
                    </div>
                    <div className='flex items-center mt-6'>
                      <div className='flex-shrink-0'>
                        <a href='#'>
                          <img
                            className='w-10 h-10 rounded-full'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=85UtzwEpvS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt='Roel Aufderehar'
                          />
                        </a>
                      </div>
                      <div className='ml-3'>
                        <p className='text-sm font-medium text-gray-900'>
                          <a href='#' className='hover:underline'>
                            Roel Aufderehar
                          </a>
                        </p>
                        <div className='flex space-x-1 text-sm text-gray-500'>
                          <time dateTime='2020-03-16'>Mar 16, 2020</time>
                          <span aria-hidden='true'>&middot;</span>
                          <span>6 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className='flex-shrink-0'>
                    <img
                      className='object-cover w-full h-48'
                      src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=85UtzwEpvS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                    <div className='flex-1'>
                      <p className='text-sm font-medium text-cyan-600'>
                        <a href='#' className='hover:underline'>
                          Video
                        </a>
                      </p>
                      <a href='#' className='block mt-2'>
                        <p className='text-xl font-semibold text-gray-900'>
                          How to use search engine optimization to drive sales
                        </p>
                        <p className='mt-3 text-base text-gray-500'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis
                          asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut
                          inventore optio animi., tempore temporibus quo laudantium.
                        </p>
                      </a>
                    </div>
                    <div className='flex items-center mt-6'>
                      <div className='flex-shrink-0'>
                        <a href='#'>
                          <img
                            className='w-10 h-10 rounded-full'
                            src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=85UtzwEpvS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt='Brenna Goyette'
                          />
                        </a>
                      </div>
                      <div className='ml-3'>
                        <p className='text-sm font-medium text-gray-900'>
                          <a href='#' className='hover:underline'>
                            Brenna Goyette
                          </a>
                        </p>
                        <div className='flex space-x-1 text-sm text-gray-500'>
                          <time dateTime='2020-03-10'>Mar 10, 2020</time>
                          <span aria-hidden='true'>&middot;</span>
                          <span>4 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
                  <div className='flex-shrink-0'>
                    <img
                      className='object-cover w-full h-48'
                      src='https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=85UtzwEpvS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                      alt=''
                    />
                  </div>
                  <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                    <div className='flex-1'>
                      <p className='text-sm font-medium text-cyan-600'>
                        <a href='#' className='hover:underline'>
                          Case Study
                        </a>
                      </p>
                      <a href='#' className='block mt-2'>
                        <p className='text-xl font-semibold text-gray-900'>
                          Improve your customer experience
                        </p>
                        <p className='mt-3 text-base text-gray-500'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum
                          voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi
                          cumque corporis perferendis hic.
                        </p>
                      </a>
                    </div>
                    <div className='flex items-center mt-6'>
                      <div className='flex-shrink-0'>
                        <a href='#'>
                          <img
                            className='w-10 h-10 rounded-full'
                            src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=85UtzwEpvS&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt='Daniela Metz'
                          />
                        </a>
                      </div>
                      <div className='ml-3'>
                        <p className='text-sm font-medium text-gray-900'>
                          <a href='#' className='hover:underline'>
                            Daniela Metz
                          </a>
                        </p>
                        <div className='flex space-x-1 text-sm text-gray-500'>
                          <time dateTime='2020-02-12'>Feb 12, 2020</time>
                          <span aria-hidden='true'>&middot;</span>
                          <span>11 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className='mt-24 bg-gray-900 sm:mt-12'>
          <div className='max-w-md px-4 py-12 mx-auto overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
            <nav className='flex flex-wrap justify-center -mx-5 -my-2' aria-label='Footer'>
              <div className='px-5 py-2'>
                <a href='#' className='text-base text-gray-400 hover:text-gray-300'>
                  About
                </a>
              </div>

              <div className='px-5 py-2'>
                <a href='#' className='text-base text-gray-400 hover:text-gray-300'>
                  Blog
                </a>
              </div>

              <div className='px-5 py-2'>
                <a href='#' className='text-base text-gray-400 hover:text-gray-300'>
                  Jobs
                </a>
              </div>

              <div className='px-5 py-2'>
                <a href='#' className='text-base text-gray-400 hover:text-gray-300'>
                  Press
                </a>
              </div>

              <div className='px-5 py-2'>
                <a href='#' className='text-base text-gray-400 hover:text-gray-300'>
                  Accessibility
                </a>
              </div>

              <div className='px-5 py-2'>
                <a href='#' className='text-base text-gray-400 hover:text-gray-300'>
                  Partners
                </a>
              </div>
            </nav>
            <div className='flex justify-center mt-8 space-x-6'>
              <a href='#' className='text-gray-400 hover:text-gray-300'>
                <span className='sr-only'>Facebook</span>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>

              <a href='#' className='text-gray-400 hover:text-gray-300'>
                <span className='sr-only'>Instagram</span>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>

              <a href='#' className='text-gray-400 hover:text-gray-300'>
                <span className='sr-only'>Twitter</span>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                </svg>
              </a>

              <a href='#' className='text-gray-400 hover:text-gray-300'>
                <span className='sr-only'>GitHub</span>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>

              <a href='#' className='text-gray-400 hover:text-gray-300'>
                <span className='sr-only'>Dribbble</span>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
            <p className='mt-8 text-base text-center text-gray-400'>
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
