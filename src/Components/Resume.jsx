import React from 'react';
import ResumeImg from '../assets/Akash.jpg';

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
                <img className='hidden md:block pl-20 pb-10 pt-10' src={ResumeImg} alt='Resume' />
                <img className='block md:hidden pl-10 pr-10 pt-10' src={ResumeImg} alt='Resume' />
            </div>
            <div className='md:w-1/2 flex flex-col justify-center items-center'>
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className='text-4xl text-white border-b-2 mb-2 w-[140px] font-bold pt-10 md:pt-20'>Resume</h1>
                    <p className='text-white pt-5 pb-10 text-center'>
                        You can view my Resume{' '}
                        <a
                            href='https://github.com/Akash19082001/Akash-Cv/blob/main/Akash%20Resume.pdf'
                            className=' font-bold border-2 px-4 rounded-ss-sm hover:bg-stone-950'
                        >
                            Click!
                        </a>
                    </p>
                    <div className='hidden md:block'>
                        <div onClick={handleScroll} className='scroll-container pr-80 link-animate'>
                            <img className='scroll-img pr-7' src='src/assets/java.webp' alt='Scroll Image 1' />
                            <img className='scroll-img pr-6 pl-2' src='src/assets/wordpress.webp' alt='Scroll Image 2' />
                            <img className='scroll-img size-12 ' src='src/assets/Express.png' alt='Scroll Image 4' />
                            <img className='scroll-img pr-7 pl-4' src='src/assets/python.webp' alt='Scroll Image 6' />
                            <img className='scroll-img pr-7 pl-4' src='src/assets/Spring.png' alt='Scroll Image 3' />
                            <img className='scroll-img pr-7 pl-2' src='src/assets/React.webp' alt='Scroll Image 7' />
                            <img className='scroll-img pr-7' src='src/assets/git.png' alt='Scroll Image 5' />
                            <img className='scroll-img pr-7 pl-1' src='src/assets/JS.png' alt='Scroll Image 8' />
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        <div onClick={handleScroll} className='scroll-container flex flex-wrap justify-center space-x-2'>
                            <img className='scroll-img w-16 h-15' src='src/assets/java.webp' alt='Scroll Image 1' />
                            <img className='scroll-img w-16 h-15' src='src/assets/wordpress.webp' alt='Scroll Image 2' />
                            <img className='scroll-img size-12' src='src/assets/Express.png' alt='Scroll Image 4' />
                            <img className='scroll-img w-16 h-15' src='src/assets/python.webp' alt='Scroll Image 6' />
                            <img className='scroll-img w-14 h-13 pr-2' src='src/assets/Spring.png' alt='Scroll Image 3' />
                            <img className='scroll-img w-16 h-15' src='src/assets/React.webp' alt='Scroll Image 7' />
                            <img className='scroll-img w-16 h-15' src='src/assets/git.png' alt='Scroll Image 5' />
                            <img className='scroll-img w-16 h-15' src='src/assets/JS.png' alt='Scroll Image 8' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
