
import PDF from './images/cv.pdf'

export default function Example() {
    return (
      <div className="bg-gradient-to-r from-indigo-50 via-white-300 to-pink-50 sm:flex sm:text-left lg:block lg:text-center shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">My Current Resume</h3>
          <div className="mt-2 sm:flex sm:items-start sm:justify-between">
            <div className="max-w-xl text-sm text-gray-500">
              <p>
                Please view my latest Resume 
              </p>
            </div>
            <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
              <a
        href={PDF}
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  