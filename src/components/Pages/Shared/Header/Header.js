import React, { useContext, Fragment } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';



const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);


  const menu = <>
    <NavLink to='/home' className={({ isActive }) => isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block' : 'text-gray-900 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block'

    }>
      Home
    </NavLink>

    <NavLink to='/services' className={({ isActive }) => isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block' : 'text-gray-900 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block'

    }>
      Services
    </NavLink>

    <NavLink to='/blog' className={({ isActive }) => isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block' : 'text-gray-900 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block'

    }>
      Blog
    </NavLink>

    {
      user && user?.uid ? <>
        <NavLink to='/my-reviews' className={({ isActive }) => isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block' : 'text-gray-900 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block'

        }> My Reviews</NavLink>

        <NavLink to='/add-service' className={({ isActive }) => isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block' : 'text-gray-900 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block'

        }> Add Service</NavLink>
      </>
        :
        <NavLink to='/login' className={({ isActive }) => isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block' : 'text-gray-900 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-md font-medium block lg:inline-block'

        }> Log in </NavLink>
    }

  </>



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>

      <Disclosure as="nav" className="sticky top-0 z-40">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-full px-2 sm:px-6 shadow-lg lg:px-14 bg-gray-100">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to='/' title='Home'>
                      <img
                        className="block h-10 w-auto lg:hidden"
                        src={logo}
                        alt="The Gallery"
                      />
                      <img
                        className="hidden h-10 w-auto lg:block"
                        src={logo}
                        alt="The Gallery"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {menu}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user?.uid ? user?.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'}
                          alt=" "
                          title={user?.uid ? user?.displayName : 'No name'}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>

                          <NavLink
                            alt='Profile'
                            to="/profile"
                            className={({ isActive }) => isActive ? 'hover:bg-gray-200 block bg-gray-200 px-4 py-2 text-sm text-gray-900' : 'block px-4 py-2 text-sm text-gray-900'}
                          >
                            Your Profile
                          </NavLink>

                        </Menu.Item>
                        <Menu.Item>

                          <NavLink
                            to=""
                            alt='Settings'
                            className={({ isActive }) => isActive ? 'hover:bg-gray-200 bg-gray-200 block px-4 py-2 text-sm text-gray-900' : 'block px-4 py-2 text-sm text-gray-900'}
                          >
                            {
                              user?.email ? user.email : 'No email available'
                            }
                          </NavLink>

                        </Menu.Item>
                        <Menu.Item>

                          {
                            user && user?.uid ? <>
                              <button onClick={logOut}
                                className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-start'
                              >
                                Sign out
                              </button>
                            </>
                              :
                              <>
                                <Link to='/login'>
                                  <button
                                    className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-start'
                                  >
                                    Sign in
                                  </button>
                                </Link>

                              </>
                          }

                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden z-50 bg-gray-200">
              <div className="space-y-1 px-2 pt-2 pb-3">

                {
                  menu
                }

              </div>
            </Disclosure.Panel>
            <hr className='h-[2px] bg-gradient-to-r from-pink-600 to-blue-500' />
          </>
        )
        }
      </Disclosure >

    </>
  );
};

export default Header;