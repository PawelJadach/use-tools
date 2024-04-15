"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { maxWidthClass } from "@/config/constants";
import SubmitNew from "./SubmitNew";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{
		href: "/tool",
		label: "all tools",
	},
	{
		href: "/category",
		label: "categories",
	},
	{
		href: "/tag",
		label: "tags",
	},
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleIsOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<nav className={`py-6 px-4 w-full backdrop-blur-sm mx-auto flex justify-between flex-col md:flex-row sticky top-0 z-50 bg-dark/90 ${maxWidthClass}`}>
			<div className="flex justify-between">
				<Link href="/">
					<Image className="transition-all duration-125 transform hover:scale-125" alt="Use tools logo" src="/logo.png" width={40} height={40} />
				</Link>

				<button onClick={toggleIsOpen} className="md:hidden">
					<span className="sr-only">Toggle navigation</span>
					{isOpen ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
				</button>
			</div>

			<div className="hidden md:block">
				<ul className="flex gap-4 items-center">
					{navigation.map((item) => (
						<NavLink href={item.href} label={item.label} key={item.href} />
					))}
					<SubmitNew />
				</ul>
			</div>

			{isOpen && (
				<div className="md:hidden" onClick={toggleIsOpen}>
					<ul className="flex gap-4 items-center flex-col">
						{navigation.map((item) => (
							<NavLink href={item.href} label={item.label} key={item.href} />
						))}
						<SubmitNew />
					</ul>
				</div>
			)}
		</nav>
	);
}
