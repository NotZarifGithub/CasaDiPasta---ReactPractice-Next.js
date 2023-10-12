import Hero from "@/components/common/Hero"
import About from "@/components/feature/About"
import Booking from "@/components/feature/Booking"

const aboutPage = () => {
  return (
    <main className='bg-[url("/background.jpg")]'>
      <Hero heropagetitle={"about us "} image={"/pasta2.jpg"}/>
      <About />
      <Booking />
    </main>
  )
}

export default aboutPage