import ShopInfo from "@/components/common/ShopInfo"
import Hero from "../../components/common/Hero"
import Menu from "./Menu"
import Booking from "@/components/feature/Booking"

const page = () => {
  return (
    <main className='bg-[url("/background.jpg")]'>
      <Hero heropagetitle={"our menu"} image={"/dessertsmenu.jpg"}/>
      <ShopInfo />
      <Menu />
      <Booking />
    </main>
  )
}

export default page