"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
	href?: string;
	onClick?: () => void;
	children: ReactNode;
};

export const Button = ({ href, children, onClick }: ButtonProps) => {
	const className = "px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white text-center rounded-full relative";
	const Background = () => <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />;

	const renderButton = () => {
		return (
			<motion.button whileHover={{ scale: 1.04, transition: { duration: 0.2 } }} className={className} onClick={onClick}>
				{children}
				<Background />
			</motion.button>
		);
	};

	const renderLink = (href: string) => {
		return (
			<Link href={href}>
				<motion.div whileHover={{ scale: 1.04, transition: { duration: 0.2 } }} className={className} onClick={onClick && onClick}>
					{children}
					<Background />
				</motion.div>
			</Link>
		);
	};

	return href ? renderLink(href) : renderButton();
};
