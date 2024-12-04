'use client';
import React, { useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';

//const NavLinks = ['Home', 'About', 'Resources'];

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<header className="top-0 left-0 w-full z-50 bg-black text-white">
			<div className="container mx-auto flex items-center justify-between px-6 py-4">
				{/* Logo */}
				<a href="#">
					<h1 className="text-sm font-bold"> Indigenous Data Review Project</h1>{' '}
				</a>

				{/* Toggle Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					aria-label={isOpen ? 'Close menu' : 'Open menu'}
					className="md:hidden"
				>
					{isOpen ? (
						<Cross2Icon className="w-6 h-6 text-white" />
					) : (
						<div className="space-y-1">
							<span className="block w-6 h-0.5 bg-white"></span>
							<span className="block w-6 h-0.5 bg-white"></span>
						</div>
					)}
				</button>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-6">
					<a href="#" className="hover:underline">
						Home
					</a>
					<a href="#about" className="hover:underline">
						About
					</a>
					<a href="#contact" className="hover:underline">
						Contact
					</a>
					<a href="#resources" className="hover:underline">
						Resources
					</a>
				</nav>
			</div>

			{/* Fullscreen Mobile Menu */}
			{isOpen && (
				<>
					<nav
						className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-8 text-xl md:hidden"
						onClick={() => setIsOpen(false)} // Close menu on link click
					>
						<a href="#home" className="hover:underline">
							Home
						</a>
						<a href="#about" className="hover:underline">
							About
						</a>
						<a href="#contact" className="hover:underline">
							Contact
						</a>
						<a href="#resources" className="hover:underline">
							Resources
						</a>
					</nav>
					{/* Close Button */}
					<button
						onClick={() => setIsOpen(false)}
						aria-label="Close menu"
						className="absolute top-4 right-6"
					>
						<Cross2Icon className="w-6 h-6 text-white" />
					</button>
				</>
			)}
		</header>
	);
};

export default Header;
