const Modal = ({ handleCloseModal, productData }) => {
	const onClose = () => {
		handleCloseModal();
	};
	return (
		<div className='modal flex justify-center items-center'>
			<div className=' flex flex-col justify-between items-center '>
				<h2>name : {productData.name}</h2>
				<p>Price: {productData.salePrice}</p>
				<img
					src={productData.imageUrl}
					alt='plant'
					className='w-32'
				/>
				<div>
					<button
						onClick={() => onClose()}
						className='bg-green-800 p-3 mr-4'
					>
						Confirm Add to Cart
					</button>
					<button
						onClick={() => onClose()}
						className='border-2 border-green-800 p-3'
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
