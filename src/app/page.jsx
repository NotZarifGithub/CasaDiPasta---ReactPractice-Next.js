import HeroMainPage from '@/components/common/HeroMainPage'
import ShopInfo from '@/components/common/ShopInfo'
import About from '@/components/feature/About'
import MainMenu from '@/components/feature/MainMenu'
import Showcase from '@/components/feature/Showcase'
import Speciality from '@/components/feature/Speciality'
import Product from '@/components/feature/Product'
import Testimony from '@/components/feature/Testimony'
import Blog from '@/components/feature/Blog'
import FAQs from '@/components/feature/FAQs'
import Booking from '@/components/feature/Booking'

export default function Home() {
  return (
    <main className='bg-[url("/background.jpg")]'>
      <HeroMainPage />
      <ShopInfo />
      <About />
      <Speciality />
      <MainMenu />
      <Showcase />
      <Product />
      <Testimony />
      <Blog />
      <FAQs />
      <Booking />
    </main>
  )
}
