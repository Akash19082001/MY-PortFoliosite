 import React from 'react';
 import ResumeImg from '../assets/Akash.jpg';
import InfiniteScrollAnimation from './InfiniteScrollAnimation';


export default function Resume() {

    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <section className='flex flex-col md:flex-row bg-black/90 fade-in'>
            <div id='resume' className='md:w-1/2 flex justify-center md:justify-start'>
                <img className='hidden md:block pl-40 pb-60 pt-60' src={ResumeImg} alt='Resume' />
                <img className='block md:hidden pl-10 pr-10 pt-10' src={ResumeImg} alt='Resume' />
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center '>
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className='text-4xl text-white border-b-2 mb-2 w-[140px] font-bold md:pt-20'>Resume</h1>
                    <p className='text-white pt-5 pb-10 text-center'>
                        You can view my Resume{' '}
                        <a
                            href='https://github.com/Akash19082001/Akash-Cv/blob/main/Akash%20Resume.pdf'
                            className="relative bg-transparent text-aqua uppercase no-underline border-2 border-aqua py-1 px-4 group">
                                <span className="absolute block w-2/12 bg-gray-800 h-[3px] right-[20%] top-[-0.22em] skew-x-[-45deg] transition-all duration-[450ms] ease-[cubic-bezier(0.86, 0, 0.07, 1)] group-hover:right-[80%]"></span>
                                <span className="absolute block w-2/12 bg-gray-800 h-[3px] left-[20%] bottom-[-0.22em] skew-x-[45deg] transition-all duration-[450ms] ease-[cubic-bezier(0.86, 0, 0.07, 1)] group-hover:left-[80%]"></span>
    
                            Click!
                        </a>
                    </p>
                    <div className='hidden md:block'>
                        <InfiniteScrollAnimation/>
                    </div>
                       <div className='block md:hidden'>
                     <div className="flex-col items-center justify-center text-slate-50">
                        <div className=" w-[17rem] max-w-[200vw] flex flex-col gap-4 relative py-6 overflow-hidden">
                            <div className="loop-slider" style={{ "--duration": "4300ms", "--direction": "normal" }}>
                            <div className="inner flex animate-loop" style={{ animationDirection: "var(--direction)", animationDuration: "var(--duration)" }}>
                            <div className="tag"># JavaScript</div>
                            <div className="tag"># Express</div>
                            <div className="tag"># Node.js</div>
                            <div className="tag"># mongoDb</div>
                            <div className="tag"># UI/UX</div>
                                {/* Duplicated content */}
                                <div className="tag"># JavaScript</div>
                                <div className="tag"># Express</div>
                                <div className="tag"># Node.js</div>
                                <div className="tag"># mongoDb</div>
                                <div className="tag"># UI/UX</div>
                            </div>
                            </div>
                            <div className="loop-slider" style={{ "--duration": "20000ms", "--direction": "reverse" }}>
                            <div className="inner flex animate-loop" style={{ animationDirection: "var(--direction)", animationDuration: "var(--duration)" }}>
                            <div className="tag"># java</div>
                            <div className="tag"># postman</div>
                            <div className="tag"># JavaScript</div>
                            <div className="tag"># Tailwind</div>
                            <div className="tag"># Aws</div>
                                {/* Duplicated content */}
                                <div className="tag"># java</div>
                                <div className="tag"># postman</div>
                                <div className="tag"># JavaScript</div>
                                <div className="tag"># Tailwind</div>
                                <div className="tag"># Aws</div>
                            </div>
                            </div>
                            
                            {/* Add more sliders as needed */}
                        </div>
                        <div className="fade absolute inset-0 pointer-events-none bg-gradient-to-r via-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
