import Image from "next/image"

// ALL THE DATA FOR MENU SECTION
const menuData = [
	{
		menu: 'starter',
		dish: [
			{
				id: 1,
				title: 'Caprese Salad',
				description: 'Fresh tomatoes, mozzarella, basil, balsamic glaze - Italy on a plate.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 2,
				title: 'Bruschetta al Pomodoro',
				description: 'Toasted bread, tomatoes, garlic, basil - Simply irresistible bites.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 3,
				title: 'Arancini di Riso',
				description: 'Crispy saffron rice balls, molten mozzarella, marinara dip - Divine.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 4,
				title: 'Prosciutto e Melone',
				description: 'Sweet melon slices wrapped in delicate prosciutto. Simply exquisite.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
		],
	},
	{
		menu: 'first course',
		dish: [
			{
				id: 1,
				title: 'Risotto ai Funghi',
				description: 'Creamy mushroom risotto cooked with Arborio rice, white wine, and a flavorful mushroom broth. ',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 2,
				title: 'Linguine alle Vongole',
				description: 'Linguine pasta sautéed with fresh clams, garlic, white wine, and red pepper flakes. ',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 3,
				title: 'Penne alla Vodka',
				description: 'Penne pasta tossed in a creamy tomato and vodka sauce, with a touch of chili flakes for a subtle kick.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 4,
				title: 'Gnocchi al Pesto',
				description: 'Soft potato gnocchi served in a vibrant basil pesto sauce made with fresh basil leaves, pine nuts, garlic, Parmesan cheese, and olive oil.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
		]
	},
	{
		menu: 'main course',
		dish: [
			{
				id: 1,
				title: 'Osso Buco alla Milanese',
				description: 'ender braised veal shanks cooked with white wine, tomatoes, onions, carrots, and gremolata.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 2,
				title: 'Pollo alla Cacciatora',
				description: 'Chicken pieces simmered in a rustic tomato sauce with onions, bell peppers, garlic, and a medley of herbs. ',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 3,
				title: 'Saltimbocca alla Romana',
				description: ' Thin slices of veal or chicken wrapped in prosciutto, topped with fresh sage leaves, and pan-fried until golden.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 4,
				title: 'Risotto ai Frutti di Mare',
				description: 'Creamy risotto prepared with a variety of seafood, such as shrimp, mussels, clams, and calamari.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
		]
	},
	{
		menu: 'side dish',
		dish: [
			{
				id: 1,
				title: 'Insalata Caprese',
				description: 'A classic Italian salad featuring slices of ripe tomatoes, fresh mozzarella cheese, and fresh basil leaves.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 2,
				title: 'Verdure Grigliate',
				description: 'Grilled vegetables, such as zucchini, eggplant, bell peppers, and asparagus, seasoned with olive oil, garlic, and herbs. ',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 3,
				title: 'Patate Arrosto',
				description: 'Roasted potatoes seasoned with olive oil, rosemary, garlic, and salt until they are crispy on the outside and tender on the inside.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 4,
				title: 'Fagiolini al Burro e Mandorle',
				description: 'Green beans sautéed in butter and toasted almonds, creating a delicious nutty flavor and crunchy texture.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
		]
	},
	{
		menu: 'desserts',
		dish: [
			{
				id: 1,
				title: 'Tiramisu',
				description: 'A beloved Italian dessert made with layers of coffee-soaked ladyfingers and creamy mascarpone cheese, dusted with cocoa powder. ',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 2,
				title: 'Cannoli Siciliani',
				description: 'Crispy pastry shells filled with sweet ricotta cheese, candied fruit, and chocolate chips. Often garnished with powdered sugar or pistachio crumbs.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 3,
				title: 'Panna Cotta',
				description: 'A creamy and silky vanilla custard dessert, typically served with a berry compote or caramel sauce. Elegant and irresistible.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 4,
				title: 'Gelato',
				description: 'Italian-style ice cream known for its intense flavor and smooth texture.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
		]
	},
	{
		menu: 'drinks',
		dish: [
			{
				id: 1,
				title: 'Espresso',
				description: 'A strong and aromatic coffee brewed by forcing hot water through finely-ground coffee beans.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 2,
				title: 'Negroni',
				description: 'A classic Italian cocktail made with equal parts gin, Campari, and sweet vermouth.',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 3,
				title: 'Aperol Spritz',
				description: 'A popular Italian aperitif consisting of Aperol (an orange liqueur), Prosecco, and a splash of soda water. ',
				image: '/pasta.jpg',
				price: '$10.00',
			},
			{
				id: 4,
				title: 'Limoncello',
				description: "A sweet and tangy lemon liqueur originating from Southern Italy. It's served chilled in small glasses as a digestif or a refreshing after-dinner drink.",
				image: '/pasta.jpg',
				price: '$10.00',
			},
		]
	}
]

const Menu = () => {
	return (
		<section>

			{/* MAIN CONTENT */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white md:p-[30px] lg:p-[80px]">
				{menuData.map((item, index) => (
					<div key={index} className="py-[10px]">

						{/* MENU COURSE */}
						<div>
							<h1 className="text-2xl font-semibold m-[20px] uppercase">
								{menuData[index].menu}
							</h1>
						</div>
						<div className="p-[20px]">
							{item.dish.map(dish => (
								<div className="flex gap-4 py-[10px]">

									{/* MENU IMAGE */}
									<div className="relative w-[50px] h-[50px]">
										<Image src={dish.image} alt="" className="object-cover rounded-full" loading="lazy" fill/>
									</div>

									{/* MENU TITLE AND DESCRIPTION */}
									<div className="flex flex-col gap-3">
										<div className="flex flex-row justify-between items-center">
											<h2 className="text-lg font-medium">
												{dish.title}
											</h2>
											<p>
												{dish.price}
											</p>
										</div>
										<div className="text-sm max-w-[300px]">
											<p>
												{dish.description}
											</p>
										</div>
									</div>
								</div>
								))}
							</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Menu