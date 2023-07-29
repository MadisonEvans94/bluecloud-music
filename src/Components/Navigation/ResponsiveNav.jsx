import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ResponsiveNav = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
	}, []);
	return (
		hasMounted && (
			<motion.nav
				initial={{ opacity: 1 }}
				animate={{ opacity: 1 }}
				transition={{ type: "spring", duration: 1.5 }}
				className="w-full bg-transparent border-b border-info"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
					<div className="flex items-center h-16">
						<div className="flex items-center justify-between w-full">
							<div className="hidden md:block w-full">
								<div className="ml-10 flex items-baseline space-x-4 justify-around cursor-pointer">
									<motion.div
										initial={{ scale: 1 }}
										whileHover={{ scale: 1.1 }}
									>
										<Link
											to="/home/store"
											className="text-white px-3 py-2 rounded-md text-sm font-medium "
										>
											Store
										</Link>
									</motion.div>

									<motion.div
										initial={{ scale: 1 }}
										whileHover={{ scale: 1.1 }}
									>
										<Link
											to="/home/music"
											className="text-white px-3 py-2 rounded-md text-sm font-medium"
										>
											Music
										</Link>
									</motion.div>

									<motion.div
										initial={{ scale: 1 }}
										whileHover={{ scale: 1.1 }}
									>
										<Link
											to="/home/contact"
											className="text-white px-3 py-2 rounded-md text-sm font-medium"
										>
											Contact
										</Link>
									</motion.div>
								</div>
							</div>
						</div>

						{/* hamburger icon */}
						<div className="-mr-2 flex md:hidden">
							<button
								onClick={() =>
									setIsMobileMenuOpen(!isMobileMenuOpen)
								}
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-info focus:outline-none focus:ring-1 focus:ring-info"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>

								<svg
									className={`${
										isMobileMenuOpen ? "hidden" : "block"
									} h-6 w-6 `}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>

								<svg
									className={`${
										isMobileMenuOpen ? "block" : "hidden"
									} h-6 w-6`}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				{/* open nav on mobile */}
				<div
					className={`${
						isMobileMenuOpen ? "block" : "hidden"
					} md:hidden`}
					id="mobile-menu"
				>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							to="/home/store/"
							className="text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Store
						</Link>

						<Link
							to="/home/music"
							className="text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Music
						</Link>

						<Link
							to="/home/contact"
							className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Contact
						</Link>
					</div>
				</div>
			</motion.nav>
		)
	);
};

export default ResponsiveNav;
