"use client";
import { gradientClassName } from "@/config/constants";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Cards = ({
	items,
	className,
}: {
	items: {
		title: string;
		slug: string;
	}[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5", className)}>
			{items.map((item, idx) => (
				<Link href={"/" + item.slug} key={"/" + item.slug} className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
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
						<CardTitle className="text-center">{item.title}</CardTitle>
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
		<div className="w-10 h-10 flex justify-center items-center">
			{!!src ? <Image width={30} height={30} alt="Test alt" src={"/logos/" + src} className={cn(className)} /> : null}
		</div>
	);
};

export const ToolCard = ({ title, description, href }: { title: string; description: string; href: string; }) => {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<Card className="p-2">
				<div className="flex gap-4">
					<div>
						<CardTitle className="mt-1">{title}</CardTitle>
						<CardDescription className="mt-1">{description}</CardDescription>
					</div>
				</div>
			</Card>
		</a>
	);
};

export const ToolCardsContainer = ({
	items,
	className,
}: {
	items: {
		title: string;
		description: string;
		href: string;
	}[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className={cn("flex flex-col py-5", className)}>
			{items.map((item, idx) => (
				<div key={item.href + idx} className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
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
					<ToolCard href={item.href} title={item.title} description={item.description} />
				</div>
			))}
		</div>
	);
};
