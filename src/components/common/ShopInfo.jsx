import Image from "next/image"

const ShopInfo = () => {
  return (
    <section className='bg-black border-white border-y'>
      <div className='flex flex-col gap-4 text-white md:flex-row p-[30px] justify-center '>

        {/* CALL INFO */}
        <div className="flex w-[350px] gap-4">
          <div className='relative w-[20px] h-[20px]'>
            <Image src='/phone.svg' alt='' fill/>
          </div>
          <div>
            <h1>
              60 + 12 3456 789
            </h1>
            <p className="max-w-[300px]">
              Call the restaurant, ask about reservations, hours, and menu, jot down info,and confirm reservations if needed.
            </p>
          </div>
        </div>

        {/* LOCATION INFO */}
        <div className="flex w-[350px] gap-4">
          <div className='relative w-[20px] h-[20px]'>
            <Image src='/map.svg' alt='' fill/>
          </div>
          <div>
            <h1>
              Petronas Twin Towers, Petronas Twin Tower
            </h1>
            <p className="max-w-[300px]">
              Lower Ground (Concourse) Level, Kuala Lumpur City Centre, 50088 Kuala Lumpur
            </p>
          </div>
        </div>

        {/* OPENING TIME INFO */}
        <div className="flex w-[350px] gap-4">
          <div className='relative w-[20px] h-[20px]'>
            <Image src='/clock.svg' alt='' fill/>
          </div>
          <div>
            <h1>
              Open Monday-Friday
            </h1>
            <p className="max-w-[300px]">
              8:00am - 9:00pm
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopInfo