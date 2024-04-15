"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { classNameType } from "@/utils/classNameType";

type ButtonProps = {
	href?: string;
	onClick?: () => void;
	children: ReactNode;
	isActive?: boolean;
	filled?: boolean;
	className?: classNameType;
};

export const Button = ({ href, children, onClick, isActive = false, filled = false, className }: ButtonProps) => {
	const classes = `block text-slate-300 hover:text-slate-200 hover:bg-emerald-500 text-md transition-colors px-2.5 py-1 rounded-md relative`;

	const activeClassName = isActive || filled ? "text-slate-200 bg-emerald-500" : "";

	const renderButton = () => {
		return (
			<motion.button whileHover={{ scale: 1.04, transition: { duration: 0.2 } }} className={cn(classes, activeClassName, className)} onClick={onClick}>
				{children}
			</motion.button>
		);
	};

	const renderLink = (href: string) => {
		return (
			<Link href={href}>
				<motion.div whileHover={{ scale: 1.04, transition: { duration: 0.2 } }} className={cn(classes, activeClassName, className)} onClick={onClick && onClick}>
					{children}
				</motion.div>
			</Link>
		);
	};

	return href ? renderLink(href) : renderButton();
};
