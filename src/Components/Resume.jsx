import ResumeImg from '../assets/Akash.jpg'

export default function Resume() {
    const config = {
        link: 'https://github.com/Akash19082001/Akash-Cv/blob/main/Akash%20Resume.pdf'
    }

    return (
        <section className='flex flex-col md:flex-row bg-black/90 fade-in'>
            <div id='resume' className='md:w-1/2 flex justify-center md:justify-start'>
                <img className='hidden md:block pl-20 pb-10 pt-10' src={ResumeImg} />
                <img className='block md:hidden pl-10 pr-10 pt-10' src={ResumeImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl pl-0 text-white border-b-2 mb-2 w-[140px] font-bold pt-10 md:pt-40'>Resume</h1>
                    <p className='text-white pt-5 pl-10 pr-20 pb-20 md:pb-60'>
                        You can view my Resume{' '}
                        <a href={config.link} className='font-bold border-2 px-4 rounded-ss-sm hover:bg-stone-950 link-animate'>
                            Click!
                        </a>
                    </p>
                    <hr className='block md:hidden' />
                    <hr className='hidden md:block w-[800px]' />
                </div>
            </div>
        </section>
    )
}
