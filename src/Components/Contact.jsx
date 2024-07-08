
export default function Contect(){
  const config={
    email:' akash19m08y2001@gmail.com ',
    phone:' +91 7339432259'
  }

return <section className='flex flex-col bg-black/90 px-5 py-20 text-center' >
    <div id="contact" className='flex flex-col items-center text-white'>
        <h1 className='text-4xl text-white border-b-2 mb-2 w-[140px] font-bold'>Contact</h1>
        <p className="pb-4 pt-10">If you want to discuss more in detail, please Contact me!</p>
        <p className="py-2"><span className="font-bold">Email :</span>{config.email}</p>
        <p className="py-2"><span className="font-bold">Phone :</span>{config.phone}</p>
    </div>
</section>
}