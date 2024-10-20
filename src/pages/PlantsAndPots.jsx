import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NurseryCard from '../components/nursery/NurseryCard';
import PlantCard from '../components/nursery/PlantCard';
import FilterSection from '../components/FilterSection';
import Modal from '../components/Modal';

const nurseriesData = [
	{
		id: 1,
		description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
		imageUrl: '/images/nurseryImages/image_01.png',
	},
	{
		id: 2,
		description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
		imageUrl: '/images/nurseryImages/image_02.png',
	},
	{
		id: 3,
		description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
		imageUrl: '/images/nurseryImages/image_03.png',
	},
	{
		id: 4,
		description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
		imageUrl: '/images/nurseryImages/image_04.png',
	},
	{
		id: 5,
		description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
		imageUrl: '/images/nurseryImages/image_05.png',
	},
	{
		id: 6,
		description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
		imageUrl: '/images/nurseryImages/image_06.png',
	},
	{
		id: 7,
		description: 'Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum',
		imageUrl: '/images/nurseryImages/image_07.png',
	},
];

const products = [
	{
		id: 1,
		name: 'Product 1',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_001.jpeg',
	},
	{
		id: 2,
		name: 'Product 2',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_002.jpeg',
	},
	{
		id: 3,
		name: 'Product 3',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_003.jpeg',
	},
	{
		id: 4,
		name: 'Product 4',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_001.jpeg',
	},
	{
		id: 5,
		name: 'Product 5',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_002.jpeg',
	},
	{
		id: 6,
		name: 'Product 6',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_003.jpeg',
	},
	{
		id: 7,
		name: 'Product 7',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_001.jpeg',
	},
	{
		id: 8,
		name: 'Product 8',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_002.jpeg',
	},
	{
		id: 9,
		name: 'Product 9',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_003.jpeg',
	},
	{
		id: 10,
		name: 'Product 10',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_001.jpeg',
	},
	{
		id: 11,
		name: 'Product 11',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_002.jpeg',
	},
	{
		id: 12,
		name: 'Product 12',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_003.jpeg',
	},
	{
		id: 13,
		name: 'Product 13',
		description: 'Indoor Plant, Low maintenance',
		price: 359,
		salePrice: 299,
		rating: 4.5,
		imageUrl: '/images/plantImages/image_001.jpeg',
	},
];

const PlantsAndPots = () => {
	const [cartModalOpen, setCartModalOpen] = useState(false);
	const [productData, setProductData] = useState(null);

	console.log(setCartModalOpen);

	const handleAddToCart = (productId) => {
		setProductData(products[productId]);
		setCartModalOpen(true);
	};

	const handleCloseModal = () => {
		setCartModalOpen(false);
	};

	return (
		<div className='text-left'>
			<Header />
			<hr />
			<div className='px-24'>
				<div>
					<input type='text' />
				</div>
				<ul className='flex gap-5'>
					<li className='px-3 py-2 bg-green-800 text-white border '>
						Plants
					</li>
					<li className='px-3 py-2 border-2 border-green-800'>
						Pots
					</li>
				</ul>
				<p>
					Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum
					quidem aut necessitatibus enim ut internos accusantium a
					numquam autem ab rerum omnis. Non molestiae ratione et
					laborum doloribus aut molestiae voluptates ut porro
					excepturi sit molestiae obcaecati qui quis beatae est
					voluptatem eius. Et architecto nihil id labore omnis hic
					iste deleniti et porro aspernatur.
				</p>
				<h1>Nursery</h1>

				<ul className='flex gap-6 px-32'>
					{nurseriesData.map((nursery, index) => (
						<NurseryCard
							key={index}
							details={nursery}
						/>
					))}
				</ul>
				<div className='flex mt-6'>
					<FilterSection />
					<div className='w-3/4'>
						<div className='flex items-center gap-4'>
							<p>300 Products</p>
							<select className='p-2 bg-green-800 text-white'>
								<option value='10'>SORT BY</option>
							</select>
						</div>
						<ul className='grid grid-cols-3'>
							{products.map((product) => (
								<PlantCard
									key={product.id}
									details={product}
									handleAddToCart={handleAddToCart}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
			{cartModalOpen && (
				<Modal
					product
					handleAddToCart={handleAddToCart}
					handleCloseModal={handleCloseModal}
					productData={productData}
				/>
			)}
			<Footer />
		</div>
	);
};

export default PlantsAndPots;
