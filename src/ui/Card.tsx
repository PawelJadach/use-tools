"use client";
import { classNameType } from "@/utils/classNameType";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
	className?: classNameType;
	children: React.ReactNode;
};

type CardImageProps = {
	src: string;
	className?: classNameType;
};

type CardAnimationProps = {
	hoveredIndex: number | null;
	index: number;
};

export const CardTitle = ({ className, children }: CardProps) => {
	return <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: CardProps) => {
	return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};

export const CardImage = ({ className, src }: CardImageProps) => {
	return (
		<div className="w-15 h-15 flex justify-center items-center p-5 rounded-sm relative">
			<Image sizes="100%" fill alt="Test alt" src={src} className={cn(className)} />
		</div>
	);
};

export const Card = ({ className, children }: CardProps) => {
	return (
		<div className={cn("rounded-2xl h-full w-full p-3 bg-dark overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", className)}>
			<div className="relative z-50">
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export const CardAnimation = ({ hoveredIndex, index }: CardAnimationProps) => {
	return (
		<AnimatePresence>
			{hoveredIndex === index && (
				<motion.span
					className="absolute inset-0 h-full w-full block rounded-3xl text-emerald-500"
					layoutId="hoverBackground"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 0.15 },
					}}
					exit={{
						opacity: 0,
						transition: { duration: 0.15, delay: 0.2 },
					}}
				/>
			)}
		</AnimatePresence>
	);
};
