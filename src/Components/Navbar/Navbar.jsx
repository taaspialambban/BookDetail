import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
         <header className="p-4">
	<div className="container flex items-center justify-between h-16 mx-auto">
		<h1 className='text-2xl font-bold text-black'>Book Vibe</h1>
		<ul className="hidden items-center space-x-3 lg:flex">
			<NavLink to="/" className={({isActive})=> isActive
			?"text-[#23BE0A] font-semibold border-2 py-1 rounded-lg p-3 b-[#23BE0A]"
			:"text-[#131313CC] text-lg font-medium"
		}>Home</NavLink>
			<NavLink to="/listBook" className={({isActive})=> isActive
			?"text-[#23BE0A] font-semibold border-2 py-1 rounded-lg p-3 b-[#23BE0A]"
			:"text-[#131313CC] text-lg font-medium"
		}>Listed Books</NavLink>
			<NavLink to="/readPage" className={({isActive})=> isActive
			?"text-[#23BE0A] font-semibold border-2 py-1 rounded-lg p-3 b-[#23BE0A]"
			:"text-[#131313CC] text-lg font-medium"
		}>Pages to Read</NavLink>
			
		</ul>
		<div className="items-center gap-2.5 flex-shrink-0 hidden lg:flex">
			<button className="self-center px-6 py-3 text-white font-semibold rounded-lg bg-[#23BE0A]">Sign in</button>
			<button className="self-center px-6 py-3 font-semibold text-white rounded-lg bg-[#59C6D2]">Sign up</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </div>
    );
};

export default Navbar;