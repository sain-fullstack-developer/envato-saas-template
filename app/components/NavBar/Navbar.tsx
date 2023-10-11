"use client";
import React from "react";
import { navMenuList } from "@/app/constants";
import Link from "next/link";
import Button from "../Button/Button";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

type Props = {};

const Navbar = (props: Props) => {
	const [toggleMenuList, setToggleMenuList] = React.useState(false);

	const openMenu = () => {
		setToggleMenuList(true);
	};
	const closeMenu = () => {
		setToggleMenuList(false);
	};

	return (
		<header className="flex justify-between py-3 px-10 sm:px-20 sticky top-0 left-0 w-full z-40">
			<h2 className={`text-h4 leading-h2`}>Enhance</h2>
			{!toggleMenuList && (
				<div
					onClick={openMenu}
					className="relative flex items-center cursor-pointer lg:hidden">
					<BiMenu size="32px" />
				</div>
			)}
			<motion.nav
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				role="navigation"
				className={`${
					toggleMenuList ? "block" : "hidden"
				} bg-primary/60 text-white lg:text-primary z-50 transition-all lg:flex lg:justify-end lg:mt-2  min-h-screen top-0 left-0 lg:min-h-fit lg:bg-transparent lg:items-center absolute grid place-items-center w-full lg:w-inherit lg:right-0 lg:relative`}>
				{toggleMenuList && (
					<div
						onClick={closeMenu}
						className="absolute top-8 right-20 cursor-pointer lg:hidden">
						<AiOutlineClose size="32px" />
					</div>
				)}
				<ul role="menu" className={`lg:flex lg:gap-10`}>
					{navMenuList.map((list, index) => {
						return (
							<li
								className="pb-8 text-center lg:mt-2 text-h4 leading-h4 lg:text-paragraph lg:leading-paragraph"
								key={index}
								role="menuitem">
								<Link href={list?.href}>{list?.listName}</Link>
							</li>
						);
					})}
					<Link className="flex justify-center lg:block" href="/">
						<Button>Free Trail</Button>
					</Link>
				</ul>
			</motion.nav>
		</header>
	);
};

export default Navbar;
