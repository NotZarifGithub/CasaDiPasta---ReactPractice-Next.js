import Hero from "@/components/common/Hero"
import Blog from "@/components/feature/Blog"

const blogPage = () => {
  return (
    <main className='bg-[url("/background.jpg")]'>
      <Hero heropagetitle={"blog"}  image={"/restaurant.jpg"}/>
      <Blog />
    </main>
  )
}

export default blogPage