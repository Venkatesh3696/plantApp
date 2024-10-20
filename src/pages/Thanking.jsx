import { Link } from 'react-router-dom';

const Thanking = () => {
	return (
		<div className='h-screen flex flex-col justify-center items-center text-center'>
			<p>Your Cart</p>
			<hr />
			<h1>
				Congratulations <br /> Order Placed!
			</h1>
			<img
				src='/images/plantImages/order_placed.png'
				alt='order placed'
				className='w-32'
			/>
			<p>
				Thank you for choosing Chaperone services. We will soon get in
				touch with you!
			</p>

			<Link to='/'>
				<button className='bg-green-800 text-white p-3 rounded'>
					CONTINUE SHOPPING
				</button>
			</Link>
		</div>
	);
};

export default Thanking;
