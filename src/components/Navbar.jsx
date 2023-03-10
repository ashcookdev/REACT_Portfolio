import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ArrowDownIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import PDF from './images/cv.pdf'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 mr-auto items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="./me.PNG"
                    alt="Your Company"
                  />
                
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 inset-y-0">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                 <Link to = "/">  <h5
                    className="inline-flex mr-auto flex-1 hover:text-gray-700 items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900  animate-pulse"
                  >
                    Home
                  </h5> </Link>
                  <Link to = "./aboutme">  <h5
                    className="inline-flex hover:text-gray-700 items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900  animate-pulse"
                  >
                    About Me
                  </h5> </Link>
                  <Link to = "./projects">  <h5
                    className="inline-flex hover:text-gray-700 items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900 animate-pulse"
                  >
                    Projects
                  </h5> </Link>
                  <Link to = "./songs">  <h5
                    className="inline-flex  inset-y-0 hover:text-gray-700 items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900  animate-pulse"
                  >
                    Songs
                  </h5> </Link>
                  <Link to = "./contact">  <h5
                    className="inline-flex  inset-y-0  hover:text-gray-700 items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900  animate-pulse"
                  >
                    Contact Me
                  </h5> </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a 
                href={PDF}
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                > Resume
                
                </a>

            
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
             <Link to="/"> <Disclosure.Button
               
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Home 
              </Disclosure.Button> </Link> 
              <Link to="/about"><Disclosure.Button
        
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                About Me
              </Disclosure.Button> </Link>
              <Link to="/projects"> <Disclosure.Button
               
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button> </Link>
              <Link to="/songs"><Disclosure.Button
               
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Songs
              </Disclosure.Button> </Link> 
              <Link to="/contact"><Disclosure.Button
               
               className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
             >
               Contact Me
             </Disclosure.Button> </Link> 
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}