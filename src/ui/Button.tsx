"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type ButtonProps = {
	href?: string;
	onClick?: () => void;
	children: ReactNode;
	isActive?: boolean;
	filled?: boolean;
};

export const Button = ({ href, children, onClick, isActive = false, filled = false }: ButtonProps) => {
	const className = `text-slate-300 hover:text-slate-200 hover:bg-gradient-to-b hover:from-emerald-500 hover:to-emerald-800 hover:bg-opacity-50 text-md transition-colors px-2.5 py-0.5 rounded-md relative`;

	const activeClassName = isActive || filled ? "text-slate-200 bg-gradient-to-b from-emerald-500 to-emerald-800 bg-opacity-50" : "";

	const renderButton = () => {
		return (
			<motion.button whileHover={{ scale: 1.04, transition: { duration: 0.2 } }} className={cn(className, activeClassName)} onClick={onClick}>
				{children}
			</motion.button>
		);
	};

	const renderLink = (href: string) => {
		return (
			<Link href={href}>
				<motion.div whileHover={{ scale: 1.04, transition: { duration: 0.2 } }} className={cn(className, activeClassName)} onClick={onClick && onClick}>
					{children}
				</motion.div>
			</Link>
		);
	};

	return href ? renderLink(href) : renderButton();
};
