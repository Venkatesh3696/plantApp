import React from 'react';

const Header = () => {
	return (
		<header className='flex w-full justify-between items-center sticky px-10 h-20'>
			<div className='flex'>
				<img
					src='.src/assets/images/logo.png'
					alt='logo'
				/>
				<h1>ChapterOne</h1>
			</div>
			<ul className='flex gap-2'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>Plants & Pots </a>
				</li>
				<li>
					<a href='#'>Tools</a>
				</li>
				<li>
					<a href='#'>Our Services</a>
				</li>
				<li>
					<a href='#'>Blog</a>
				</li>
				<li>
					<a href='#'>Our Story</a>
				</li>
				<li>
					<a href='#'>FAQs</a>
				</li>
			</ul>
			<div>
				<button>My profile</button>
				<button>Cart</button>
			</div>
		</header>
	);
};

export default Header;
