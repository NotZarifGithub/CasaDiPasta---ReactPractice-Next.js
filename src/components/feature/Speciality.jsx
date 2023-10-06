import Image from "next/image"

// DATA FOR SPECIALITY SECTION
const specialityData = [
  {
    id: 1,
    title: 'Family-Style Pasta',
    description: 'Offer family-sized portions of pasta dishes for sharing among larger groups.',
    image: '/pasta.svg',
  },
  {
    id: 2,
    title: 'Reservations for Events',
    description: "Accept reservations for special events, such as Valentine's Day dinners or holiday celebrations.",
    image: '/reservation.svg',
  },
  {
    id: 3,
    title: 'Wine and Beverage',
    description: 'Complement meals with a well-curated wine list, cocktails, and other beverages.',
    image: '/wine.svg',
  },
  
]

const Speciality = () => {
  return (
    <section className='text-white bg-black border-b py-[20px]'>
      <div className="flex flex-col md:flex-row">
        {specialityData.map(item => (
          <div className="flex flex-col items-center justify-center text-center p-[30px]">
            <div className="relative w-[100px] h-[100px] border">
              <Image src={item.image} alt="" className="p-[20px]" fill/>
            </div>
            <div className="py-[10px]">
              <h1 className="text-xl py-[20px]">
                {item.title}
              </h1>
              <p className="text-sm font-light max-h-[50px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Speciality