import Hero from "@/components/common/Hero"
import About from "@/components/feature/About"

const aboutPage = () => {
  return (
    <main className='bg-[url("/background.jpg")]'>
      <Hero heropagetitle={"about us "} image={"/pasta2.jpg"}/>
      <About />
    </main>
  )
}

export default aboutPage