import Hero from "@/components/common/Hero"
import Blog from "@/components/feature/Blog"
import Booking from "@/components/feature/Booking"

const blogPage = () => {
  return (
    <main className='bg-[url("/background.jpg")]'>
      <Hero heropagetitle={"blog"}  image={"/restaurant.jpg"}/>
      <Blog />
      <Booking />
    </main>
  )
}

export default blogPage