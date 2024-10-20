import { CgProfile } from 'react-icons/cg';
import { FaCartShopping } from 'react-icons/fa6';

const Header = () => {
	return (
		<header className='flex w-full justify-between items-center sticky px-10 h-20'>
			<div className='flex items-center gap-3'>
				<img
					src='/images/logo.png'
					alt='logo'
					className='h-12'
				/>
				<h1>ChapterOne</h1>
			</div>
			<ul className='flex gap-4'>
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
			<div className='flex gap-3'>
				<div className='flex flex-col items-center'>
					<CgProfile />
					<button>My profile</button>
				</div>
				<div className='flex flex-col  items-center'>
					<FaCartShopping />
					<button>Cart</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
