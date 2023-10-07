import ShopInfo from "@/components/common/ShopInfo"
import Hero from "../../components/common/Hero"
import Menu from "./Menu"

const page = () => {
  return (
    <main className='bg-[url("/background.jpg")]'>
      <Hero heropagetitle={"our menu"} image={"/dessertsmenu.jpg"}/>
      <ShopInfo />
      <Menu />
    </main>
  )
}

export default page