import GoogleMapsLoader from './GoogleMapsLoader';

const Booking = () => {
  return (
    <section className='md:py-[100px] scroll-smooth' id='booking'>
      <div className='max-w-[700px] mx-auto flex flex-col'>

        {/* GOOGLE MAPS */}
        <GoogleMapsLoader />
        <div className='text-white p-[40px]'>
          <h1 className="justify-center text-center mb-5 text-2xl font-bold leading-none uppercase md:text-3xl py-[20px]">
            Book a table
          </h1>

          {/* BOOKING SECTION */}
          <div className='flex flex-col bg-black/40 p-[20px]'>
            <div>
              <input type="text" placeholder='First Name' className='bg-black p-[10px] m-[10px]'/>
              <input type="text" placeholder='Last Name' className='bg-black p-[10px] m-[10px]' />
            </div>
            <div>
              <input type="datetime-local" placeholder='Date' className='bg-black p-[10px] m-[10px]'/>
              <input type="text" placeholder='Phone' className='bg-black p-[10px] m-[10px]'/>
            </div>
            <div>
              <input type="text" placeholder="Message" className='bg-black p-[10px] m-[10px]'/>
              <button>
                <input type="submit" className='bg-black p-[10px] m-[10px]'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking