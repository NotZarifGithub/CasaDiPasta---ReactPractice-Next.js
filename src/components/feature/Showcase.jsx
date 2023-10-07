import Image from "next/image"

// SHOWCASE DATA
const showcaseData = [
	{
		id: 1,
		image: '/restaurantshowcase.jpg',
	},
	{
		id: 2,
		image: '/restaurantshowcase2.jpg',
	},
	{
		id: 3,
		image: '/restaurantshowcase1.jpg',
	},
	{
		id: 4,
		image: '/restaurantshowcase3.jpg',
	},
]

const Showcase = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row">

				{/* SHOWCASING IMAGES */}
				{showcaseData.map((item, index) => (
					<div key={index} className="relative w-full h-[300px]">
						<Image src={item.image} alt="" className="object-cover" loading="lazy" fill/>
					</div>
				))}
      </div>
    </section>
  )
}

export default Showcase