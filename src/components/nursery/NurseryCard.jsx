import React from 'react';

const NurseryCard = ({ details }) => {
	return (
		<li className='w-36 flex flex-col justify-start items-center text-center '>
			<img
				className=' w-full aspect-square rounded-[50%]'
				src={details.imageUrl}
				alt={`nursery ${details.id}`}
			/>
			<p className='text-[#838383] text-xs'>{details.description}</p>
		</li>
	);
};

export default NurseryCard;
