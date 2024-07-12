"use client";
import { Tools } from "@/queries/categories";
import { Card, CardAnimation, CardDescription, CardImage, CardTitle } from "./Card";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { classNameType } from "@/utils/classNameType";
import Link from "next/link";

type ToolCardProps = {
	item: Tools[number];
};

type ToolCardsProps = {
	items: NonNullable<Tools>;
	className?: classNameType;
};

export const ToolCard = ({ item }: ToolCardProps) => {
	const iconSrc = item?.icon && item?.icon.length > 0 ? item?.icon[0].url : "";
	const urlWithRef = `${item?.website}?ref=use-tools`;
	const category = item?.category && item?.category[0];

	return (
		<>
			<Card className="p-2">
				<Link href={urlWithRef} target="_blank" rel="noreferrer" className="cursor-pointer group">
					<span className="flex flex-col gap-4 h-full">
						<span className="flex items-center gap-4">
							<CardImage src={iconSrc} alt={`${item?.name} logo`} />
							<CardTitle className="mt-1">{item?.name}</CardTitle>
							{category && (
								<Link className="transition-all group-hover:text-emerald-200 ml-auto text-xs text-slate-400 font-light lowercase" key={category?.slug} href={`/category/${category?.slug}`}>
									{category.name}
								</Link>
							)}
						</span>
						<CardDescription className="mt-1">{item?.description}</CardDescription>
						<p className="flex justify-start items-start gap-2 flex-wrap mt-auto">
							{item?.tag?.map((tag) => (
								<Link className="transition-all text-xs text-slate-400 group-hover:text-slate-200 font-light lowercase" key={tag?.slug} href={`/tag/${tag?.slug}`}>
									#{tag?.slug}
								</Link>
							))}
						</p>
					</span>
				</Link>
			</Card>
		</>
	);
};

export const ToolCards = ({ items, className }: ToolCardsProps) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5", className)}>
			{items.map((item, index) => (
				<div key={index} className="relative group block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
					<CardAnimation hoveredIndex={hoveredIndex} index={index} />
					<ToolCard item={item} />
				</div>
			))}
		</div>
	);
};
