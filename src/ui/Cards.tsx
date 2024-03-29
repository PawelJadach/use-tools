"use client";
import { gradientClassName } from "@/config/constants";
import { Categories, Tools } from "@/queries/categories";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Cards = ({ items, className, type }: { items: Categories; className?: string; type: string }) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const getUrlByType = (type: string) => {
		switch (type) {
			case "Categories":
				return "/category/";
			case "Tags":
				return "/tag/";
			default:
				return "/";
		}
	};

	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5", className)}>
			{items.map((item, idx) => (
				<Link href={`${getUrlByType(type)}${item?.slug}`} key={"/" + item?.slug} className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className={cn("absolute inset-0 h-full w-full block rounded-3xl", gradientClassName)}
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
					<Card>
						<CardTitle className="text-center">{item?.name}</CardTitle>
					</Card>
				</Link>
			))}
		</div>
	);
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return (
		<div className={cn("rounded-2xl h-full w-full p-3 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", className)}>
			<div className="relative z-50">
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return <h4 className={cn("text-zinc-100 font-bold tracking-wide", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};

export const CardImage = ({ className, src }: { className?: string; src: string }) => {
	return (
		<div className="w-15 h-15 flex justify-center items-center p-5  rounded-sm relative">
			<Image layout="fill" objectFit="contain" alt="Test alt" src={src} className={cn(className)} />
		</div>
	);
};

export const ToolCard = ({ item }: { item: Tools[number] }) => {
	const iconSrc = item?.icon && item?.icon.length > 0 ? item?.icon[0].url : "";
	const urlWithRef = `${item?.website}?ref=use-tools`;

	return (
		<a href={urlWithRef} target="_blank" rel="noreferrer" className="cursor-pointer">
			<Card className="p-2">
				<div className="flex gap-4">
					<CardImage src={iconSrc} />
					<div>
						<CardTitle className="mt-1">{item?.name}</CardTitle>
						<CardDescription className="mt-1">{item?.description}</CardDescription>
					</div>
				</div>
			</Card>
		</a>
	);
};

export const ToolCardsContainer = ({ items, className }: { items: NonNullable<Tools>; className?: string }) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className={cn("flex flex-col py-5", className)}>
			{items.map((item, idx) => (
				<div key={idx} className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className={cn("absolute inset-0 h-full w-full block rounded-3xl", gradientClassName)}
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
					<ToolCard item={item} />
				</div>
			))}
		</div>
	);
};
