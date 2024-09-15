import React from 'react';
import Workdemo from './Workdemo';

const data =[
    {
        year: 2024,
        title: "Full Stack Developer",
        duration: "*now",
        details: "Now Working as a FullStack Developer Micro Systems.prodect based micro services and finance sites, bank sites, technology innovations. ",
    },
    {
        year: 2024,
        title: "Java Full Stack Developer internShip completed",
        duration: "6 months",
        details: "Subsequently, I was hired as an intern at INMAKES Infotech, where I worked as a Java full-stack developer.I am a highly skilled software developer with expertise in both front-end and back-end technologies.",
    },
    {
        year: 2023,
        title: 'python full stack Course completed',
        duration: "6 months",
        details: 'after my graduation, I pursued a full-stack Python course offered by NetworkzSystems. Throughout the course, I completed numerous projects, like a django framework.',
    },
    
    {
        year: 2023,
        title: "BE Computer Science Degree completed",
        duration: "4 Years",
        details: " I graduated with a Bachelor's Engineering in Computer Science from Anna University. During my studies, I spearheaded a project called 'Drug Supply Management, where I led a team responsible for developing the website.",
    }
]
function Work() {
    return (
      <div id='career' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center text-black pb-10'>Career</h1>
          <React.Fragment>
              {data.map((demo, idx)=>(
                  <Workdemo 
                      key={idx} 
                      year={demo.year} 
                      title={demo.title} 
                      duration={demo.duration} 
                      details={demo.details}
                  />
              ))}
          </React.Fragment>
      </div>
    );
  }
  

export default Work
