
import ProjectCard from "./ProjectCard"

const projects = [
    {
        name: 'Penrod Property Inspections',
        img: 'src/penrodInspections.png',
        tech: ['React', 'React Router', 'JavaScript', 'HTML', 'Tailwind CSS'],
        description: 'I built this Website for a friend that has his own property and septic inspection business. I created this website using a conversion based design. I also added tooling on the backend to help build the business. One of my favorite tool integration is a reputation management system that I built to help drive growth through local SEO.',
        websiteLink: 'https://penrodinspections.com/',
        githubLink: 'https://github.com/CollierTR/Penrod-Property-Inspections',
    },
    {
        name: 'Bloodhound',
        img: 'src/bloodhound.png',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: `Bloodhound is an OSINT (Open Source Intellegence) tool directory. This was my first personal project. I plan on rewriting it in React soon. I would love to start integrating my own OSINT script into it and making it a desktop application. Law Enforcement and Anti-trafficking groups use OSINT tools for inline investigation. I would love to one day build the "Excel" of OSINT tools!`,
        websiteLink: 'https://colliertr.github.io/OSINT-dashboard/',
        githubLink: 'https://github.com/CollierTR/OSINT-dashboard',
    },
    {
        name: 'Martial Arts Themed Twitter Clone',
        img: 'src/theDojo.png',
        tech: ['JavaScript', 'HTML', 'CSS', 'Netlify'],
        description: 'This was a fun project I did when exploring the capabilities of vanilla JavaScript. Having to manage state outsite of React makes me all the more thankful for modern frameworks.',
        websiteLink: 'https://dojo-twitter-clone.netlify.app/',
        githubLink: 'https://github.com/CollierTR/Twitter-Clone',
    },
    {
        name: 'random Color Generator',
        img: 'src/colorRandomizer.png',
        tech: ['React', 'HTML', 'Tailwind CSS', 'Random Color API'],
        description: 'This is a simple web app that that queries a random color api and displays the color in the UI. I made this when I was learning both React and API usage. It was fun to implement a complementing color for the text and buttons for pair with the generated color of the UI.',
        websiteLink: 'https://color-randomizer-webapp.netlify.app/',
        githubLink: 'https://github.com/CollierTR/Color-Randomizer',
    },
    {
        name: 'MO Schools',
        img: 'src/moSchools.png',
        tech: ['SquareSpace', 'HTML', 'CSS', 'Square'],
        description: "I took over the management of this site for a local business owner. Through the management of this site, I've had the oppertunity to learn many integrations that are common the E-commerce platforms. I not only redesigned the UI and feel of the site, But I also integrated it with an Ecommerce platform and billing system.",
        websiteLink: 'https://www.mo-schools.com/',
    },
    {
        name: 'Flow State',
        img: 'src/focusFlow.png',
        tech: ['React', 'HTML', 'Tailwind CSS', 'Local Storage Triggers', 'Hot Reloading'],
        description: 'Flow State is a quick side project I built to help me stay "in the zone" When working with multiple monitors. The purpose is simple, you can have multiple instances of the web app open (one for each unused monitor) the instances of Flow State fill the unsused space to both limit distraction and remind you of your current focus point. When an instance is updated to a new focus point, all other instances will update.',
        websiteLink: 'https://focused-flow-state.netlify.app/',
        githubLink: 'https://github.com/CollierTR/Flow-State',
    },
    {
        name: '"Black Hat" VScode Theme',
        img: 'src/blackHat.png',
        tech: ['JSON', 'VSCode'],
        description: `I'm a big fan of "Cyber Punk" and "Hacker" color scemes. I had a hard time finding a VSCode theme that had that feel but also had good syntax highlighting, so I decided to make my own!`,
        githubLink: 'https://github.com/CollierTR/BlackHat-VSCode-Theme',
    },
]



function Projects() {
  return (
    <div className="flex flex-col my-14 text-white justify-center place-items-center w-full">
        <div className="flex flex-col w-full justify-center place-items-center ">
            <p className="text-5xl blackOutline">PROJECTS</p>
            <div className="w-1/6 border-2 my-3 backOutline rounded-full border-primary">
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 my-10 place-content-center w-10/12 gap-10 grow">
            {
              projects.map((project) => (

                <ProjectCard
                  key={project.name}
                  title={project.name}
                  description={project.description}
                  technologiesArr={project.tech}
                  weblink={project.websiteLink}
                  githubLink={project.githubLink}
                  img={project.img}
                />

              ))
            }
            </div>
        </div>
    </div>
  )
}

export default Projects
