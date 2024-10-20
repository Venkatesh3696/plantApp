import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-[#F0FFE5] flex flex-col px-28 py-4'>
			<div className='grid grid-cols-5 gap-6'>
				<div className='flex flex-col '>
					<h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
					<p>
						Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum
						quidem aut necesbus enim
					</p>
					<input
						type='text'
						placeholder='Enter your email'
					/>
					<button className='w-fit bg-green-700 p-2 text-white rounded-xl'>
						SUBSCRIBE
					</button>
				</div>
				<div>
					<h1>ABOUT US</h1>
					<ul>
						<li>Our Story</li>
						<li>Blogs</li>
						<li>Careers</li>
						<li>Contact Us</li>
						<li>Hekp & Suport</li>
					</ul>
				</div>
				<div>
					<h1>OUR SERVICES</h1>
					<ul>
						<li>Book Maali</li>
						<li>Plant Day care</li>
						<li>Rent Plants</li>
						<li>Plants & Pots</li>
						<li>Gardening Tools</li>
					</ul>
				</div>
				<div>
					<h1>USEFUL LINKS</h1>
					<ul>
						<li>My Account</li>
						<li>Orders & Returns</li>
						<li>Track Order</li>
						<li>Terms & Conditions</li>
						<li>Privacy Policy</li>
						<li>Return, Refund & Replacement Policy</li>
					</ul>
				</div>
				<div>
					<h1>GET IN TOUCH</h1>
					<ul>
						<li>
							Address: F-262, First Floor, Sushant Lok Phase-III,
							Sector-57, Gurgaon, Haryana, India 122003
						</li>
						<li>
							Call: <br />
							+919958287272
						</li>
						<li>
							Email:
							<br />
							care@chaperoneplants.com
						</li>
					</ul>
				</div>
			</div>
			<div>
				<h1>CHAPTER ONE</h1>
				<p>
					Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum
					quidem aut necessitatibus enim ut internos accusantium a
					numquam autem ab rerum omnis. Non molestiae ratione et
					laborum doloribus aut molestiae voluptates ut porro
					excepturi sit molestiae obcaecati qui quis beatae est
					voluptatem eius. Et architecto nihil id labore omnis hic
					iste deleniti et porro aspernatur.
				</p>
				<h1>Follow us on </h1>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>

			<hr />
			<p>© 2023, chaperone.com All rights reserved.</p>
		</footer>
	);
};

export default Footer;
