import React from 'react';
import { Link } from 'react-router-dom';

const PlantCard = ({ details, handleAddToCart, setSelectedProduct }) => {
	console.log(handleAddToCart);

	return (
		<li className='w-72 my-4 '>
			<div>
				<img
					src={details.imageUrl}
					alt=''
					className='w-full aspect-square'
				/>
				<Link to='/order-placed'>
					<button className='w-full bg-green-800 p-3 text-white'>
						View Product
					</button>
				</Link>
			</div>
			<div>
				<h2>{details.title}</h2>
				<p>{details.description} </p>
				<p>{details.rating}</p>
				<p>
					<span className='line-through mr-3'>₹ {details.price}</span>
					<span className='text-bold'>₹ {details.salePrice}</span>
				</p>
			</div>
			<div className='flex  gap-2'>
				<button
					className='bg-green-800 text-white p-2 rounded w-full h-8'
					onClick={() => handleAddToCart(details.id)}
				>
					Add to Cart
				</button>
				<button className=' border-2 border-green-800 w-full h-8'>
					Buy on Rent
				</button>
			</div>
		</li>
	);
};

export default PlantCard;
