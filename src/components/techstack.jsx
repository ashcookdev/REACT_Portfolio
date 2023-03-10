const incentives = [
    {
      name: 'HTML',
      imageSrc: 'https://clipground.com/images/html5-logo-2.png',
      
    },
    {
      name: 'CSS',
      imageSrc: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',
    },
    {
      name: 'Javascript',
      imageSrc: 'https://www.pinclipart.com/picdir/big/16-165768_javascript-logo-number-angularjs-node-javascript-logo-png.png',
  
    },
    {
        name: 'Node.js',
        imageSrc: 'https://th.bing.com/th/id/R.4dfe01148ebce3a9de8ab55279b0b4bc?rik=Cb%2f46GSGyzIMJA&pid=ImgRaw&r=0',
    
      },
      {
        name: 'Tailwind Css',
        imageSrc: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
      
      },
      {
        name: 'React',
        imageSrc: 'https://th.bing.com/th/id/R.13368578740b7cfc459e54004312bc14?rik=B%2bxLdBphCiUxQA&pid=ImgRaw&r=0',
  
      },
      {
        name: 'JSX',
        imageSrc:'https://www.pinclipart.com/picdir/big/16-165768_javascript-logo-number-angularjs-node-javascript-logo-png.png',

      },
      {
        name: 'JQuery',
        imageSrc: 'https://th.bing.com/th/id/R.c66be5b85a072207ece34d6b3df1fda1?rik=K4xNsN6b6S%2bwag&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fjquery-logo-png-png-more-2048.png&ehk=pW%2bDrNcK0gyqhvgUdQocwZ%2f4UqXqrjxX18MhbaTpH2Y%3d&risl=&pid=ImgRaw&r=0https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      
      },
      {
        name: 'Bootstrap',
        imageSrc: 'https://th.bing.com/th/id/OIP.c4RBIyTHaeRH08T4bp_waAHaGO?pid=ImgDet&rs=1',
      
      },
    
  ]
  
  export default function Example() {
    return (
      <div className="bg-gradient-to-r from-indigo-50 via-white-300 to-pink-50mt-0">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
            <div className="mx-auto max-w-xl lg:max-w-none ">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  My Tech Stack
                </h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
                {incentives.map((incentive) => (
                  <div key={incentive.name} className="text-center">
                    <div className="sm:flex-shrink-0">
                      <div className="flow-root">
                        <img className="mx-auto h-16 w-16" src={incentive.imageSrc} alt="" />
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                      <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                      <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  