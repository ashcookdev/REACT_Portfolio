import TechStack from "./techstack"



const posts = [
    {
      id: 1,
      title: 'Bootstrap Portfolio',
      href: 'https://ashcookdev.github.io/Bootstrap-Portfolio/',
      description:
        'We were asked to create a portfolio using just the bootstrap component library as one of our projects.',
      imageUrl:
        './Bootstrap.gif',

      readme: { title: 'readme', href: 'https://github.com/ashcookdev/Bootstrap-Portfolio/' },
      author: {
        name: 'Ashley Cook',
        role: 'Creator',
        imageUrl:
          './me.PNG',
          tech1: 'HTML',
          tech2: 'CSS',
          percentage: '50.5%'
      },
    },
   
    {
      id: 2,
      title: 'Weather App',
      href: 'https://ashcookdev.github.io/Weather-App/?',
      description:
        'We were asked to create a Weather App using the open weather API.',
      imageUrl:
        './weather.gif',

      readme: { title: 'readme', href: 'https://github.com/ashcookdev/Weather-App' },
      author: {
        name: 'Ashley Cook',
        role: 'Creator',
        imageUrl:
          './me.PNG',
          tech1: 'Javascript',
          tech2: 'HTML/CSS',
          percentage: '78.1%'
      },
    }, 
    {
      id: 3,
      title: 'Coding Quiz',
      href: 'https://ashcookdev.github.io/Coding-Quiz/',
      description:
        'We were asked to create a Coding Quiz using vanilla javascript.',
      imageUrl:
        './Quiz.gif',

      readme: { title: 'readme', href: 'https://github.com/ashcookdev/Coding-Quiz' },
      author: {
        name: 'Ashley Cook',
        role: 'Creator',
        imageUrl:
          './me.PNG',
          tech1: 'Javascript',
          tech2: 'HTML/CSS',
          percentage: '82.1%'
      },
    }, 
    {
      id: 4,
      title: 'Password Generator',
      href: 'https://ashcookdev.github.io/Password/',
      description:
        'We were asked to create a password generator using user inputs.',
      imageUrl:
        './Password.gif',

      readme: { title: 'readme', href: 'https://github.com/ashcookdev/Password' },
      author: {
        name: 'Ashley Cook',
        role: 'Creator',
        imageUrl:
          './me.PNG',
          tech1: 'HTML',
          tech2: 'CSS',
          percentage: '50.5%'
      },
    },
   
    {
      id: 5,
      title: 'Night Out API Project',
      href: 'https://annagilthorpe.github.io/Project1/?',
      description:
        'We were asked to create a website from scratch using 2 apis.',
      imageUrl:
        './Night.gif',

      readme: { title: 'readme', href: 'https://github.com/AnnaGilthorpe/Project1' },
      author: {
        name: 'Ashley Cook, Anna Gilthorphe, James Fahey',
        role: 'Creator',
        imageUrl:
          './me.PNG',
          tech1: 'Javascript',
          tech2: 'HTML/CSS',
          percentage: '25.1%'
      },
    }, 
    {
      id: 6,
      title: 'Work Calender',
      href: 'https://ashcookdev.github.io/Work-Calender/',
      description:
        'We were asked to create a work calender using Jquery and moment.js with a local storage feature.',
      imageUrl:
        './Workday.gif',

      readme: { title: 'readme', href: 'https://github.com/ashcookdev/Work-Calender' },
      author: {
        name: 'Ashley Cook',
        role: 'Creator',
        imageUrl:
          './me.PNG',
          tech1: 'Javascript',
          percentage: '50%'
      },
    }, 
  
  
  
  
  ]
  
  export default function Projects() {
    return (
      <div id="projects" className="bg-white py-24 sm:py-50 ">
        <div className="mx-auto width: 50%; px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Projects</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-contain sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                   
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0 " />
                        {post.title}
                      </a> 
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p><div>
                    <div><a className=" rounded bg-indigo-50 py-1 px-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100 animate-pulse"
 href={post.readme.href}> GitHub</a></div>
                  </div>
                      
      <div className="mt-6" aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-red-200">
          <div className="h-2 rounded-full bg-indigo-600" style={{ width:post.author.percentage}} />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
          <div className="text-indigo-600">{post.author.tech1}</div>
          <div className="text-center text-indigo-600"></div>
          <div className="text-center"></div>
          <div className="text-right">{post.author.tech2}</div>
        </div>
      </div>
    </div>
    
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
    


                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <TechStack></TechStack>
      </div>

    )
  }
  