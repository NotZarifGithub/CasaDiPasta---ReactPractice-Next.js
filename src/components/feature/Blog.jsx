import Image from "next/image"

// BLOG DATA
const blogData = [
	{
		id: 1,
		title: 'Creamy Garlic Parmesan Pasta',
		description: "Indulge in the ultimate comfort food with this velvety, creamy garlic parmesan pasta. This dish combines al dente pasta with a luscious sauce made from fresh garlic, heavy cream, and grated parmesan cheese. It's a quick and easy recipe that's perfect for a cozy weeknight dinner.",
		image: '/blogpasta.jpg'
	},
	{
		id: 2,
		title: 'Spicy Arrabbiata Pasta with a Kic',
		description: "Spice up your dinner routine with our fiery Arrabbiata pasta recipe. This classic Italian dish features penne pasta smothered in a zesty tomato sauce infused with red pepper flakes, garlic, and fresh basil. It's a bold and flavorful choice for those who love a bit of heat in their meals.",
		image: '/blogpasta1.jpg'
	},
	{
		id: 3,
		title: 'Mushroom and Spinach Alfredo',
		description: "Elevate your pasta game with our rich and satisfying Mushroom and Spinach Alfredo Pasta. This dish combines fettuccine noodles with a creamy Alfredo sauce, sautéed mushrooms, and tender baby spinach. It's a vegetarian delight that's both comforting and elegant—a must-try for pasta enthusiasts.",
		image: '/blogpasta2.jpg'
	},
]

const Blog = () => {
  return (
		<section className='py-[70px]'>
      <div className="flex flex-col items-center justify-center"> 
        <div className="flex flex-col items-center justify-center p-[30px] lg:p-[40px] max-w-[500px] md:max-w-[600px] lg:items-center text-white py-[130px]">

					{/* BLOG TITLE */}
          <h1 className="items-center mb-5 text-2xl font-bold leading-none uppercase md:text-3xl">
						Recent from blog
          </h1>

          {/* BLOG DESCRIPTION */}
          <div className="flex flex-col text-sm font-semibold text-white/70 text-center">
            <p>
							We're thrilled to have you here on our blog page. This is your go-to spot for all things interesting and informative. From helpful tips to entertaining stories, we've got it all covered. Explore, learn, and enjoy your time with us!
            </p>
          </div>
        </div>

				{/* BLOG CONTENT */}
				<div className="flex flex-col gap-14 md:gap-5 md:flex-row px-[60px] py-[40px]">
					{blogData.map((item, index) => (
						<div key={index} className="max-w-[250px]">
							<div className="relative w-full h-[200px]">
								<Image src={item.image} alt="" className="object-cover" fill/>
							</div>
							<div className="text-white py-[10px]">
								<h1 className="text-xl font-medium py-[10px] uppercase">
									{item.title}
								</h1>
								<p className="text-sm text-white/70 text-start py-[10px] h-[200px]">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
      </div>
    </section>
  )
}

export default Blog