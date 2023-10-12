import Hero from "@/components/common/Hero"
import Booking from "@/components/feature/Booking"
import GoogleMapsLoader from "@/components/feature/GoogleMapsLoader"

const ContactPage = () => {
  return (
    <main className='bg-[url("/background.jpg")]'>

      {/* HERO */}
      <Hero heropagetitle={"Contact"}  image={"/drinksmenu.jpg"}/>
      <div className="flex flex-col items-center justify-center bg-black border-y">

        {/* CONTACT INFORMATION */}
        <div className=" text-white max-w-[400px] p-[60px] text-sm flex flex-col gap-9 justify-center items-center">
          <h1 className="text-2xl font-semibold text-center">
            Contact Information
          </h1>
          <p className="text-center">
            Address: <span className="text-white/40">Petronas Twin Towers, Petronas Twin Tower, Lower Ground (Concourse) Level, Kuala Lumpur City Centre, 50088 Kuala Lumpur</span>
          </p>
          <p className="text-center">
            Phone: <span className="text-white/40">+ 6012 345 6789</span>
          </p>
          <p className="text-center">
            Email: <span className="text-white/40">flacko.programming@gmail.com</span>
          </p>
        </div>
      </div>
      <Booking />
      <div>
      </div>
    </main>
  )
}

export default ContactPage
