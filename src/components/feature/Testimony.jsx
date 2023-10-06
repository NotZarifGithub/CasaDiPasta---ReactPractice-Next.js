import { Fuggles } from "next/font/google"
import Card from "../ui/card"

const fuggles = Fuggles({
  subsets: ['latin'],
  weight: ['400']
})

const cardData = [
  {
    id: 1,
    description: "Enjoyed a fantastic meal here last night. The pasta was cooked to perfection, and the sauce had a delightful balance of flavors. The service was excellent, with attentive and courteous staff making our dining experience even more enjoyable. The cozy ambiance added a warm touch to the evening. I'll definitely be back for more!",
    image: '/people.jpg',
    name: 'Ian Dooley',
  },
  {
    id: 2,
    description: 'Absolutely loved the food at this Italian restaurant! The spaghetti carbonara was heavenly, and the tiramisu was a delightful way to end the meal. The staff was attentive, and the atmosphere was cozy. A must-visit for Italian food enthusiasts!',
    image: '/people2.jpg',
    name: 'Toa Heftiba',
  },
  {
    id: 3,
    description: 'We had a family dinner here, and it exceeded our expectations. The pizza was mouthwatering, and the kids loved the garlic knots. The staff went out of their way to accommodate our large group. We left with full stomachs and big smiles!',
    image: '/people3.jpg',
    name: 'Ivana Cajina',
  },
  {
    id: 4,
    description: "I had a romantic dinner with my partner at this restaurant, and it was perfect. The ravioli al tartufo was exquisite, and the wine list was impressive. The candlelit setting created a lovely ambiance. We couldn't have asked for a better evening.",
    image: '/people4.jpg',
    name: 'Ayo Ogunseinde',
  },
]

const Testimony = () => {
  return (
    <section className='bg-[url("/pasta.jpg")] py-[30px]'>
      <div className="flex flex-col items-center justify-center"> 
        
        {/* TESTIMONY CONTENT */}
        <div className="flex flex-col items-center justify-center p-[30px] lg:p-[40px] max-w-[500px] md:max-w-[600px] lg:items-center text-black py-[130px]">
          <h1 className="items-center mb-5 text-2xl font-bold leading-none uppercase lg:text-4xl md:text-3xl">
            <span className={`${fuggles.className} text-6xl capitalize`}>Testimony</span><br />Customer reviews
          </h1>

          {/* TESTIMONY DESCRIPTION */}
          <div className="flex flex-col text-sm font-semibold text-black/70">
            <p>
              Customer reviews are comments and ratings provided by our diners based on their experiences at our restaurant. 
              These reviews offer feedback on various aspects, such as food quality, service, and ambiance. We value these 
              reviews as they help us improve and provide the best possible dining experience for our guests.
            </p>
          </div>
        </div>

        {/* CUSTOMER REVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-[1000px]">
          {cardData.map(item => (
            <Card 
              description={item.description}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimony