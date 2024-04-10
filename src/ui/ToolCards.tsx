"use client";
import { Tools } from "@/queries/categories";
import { Card, CardAnimation, CardDescription, CardImage, CardTitle } from "./Card";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { classNameType } from "@/utils/classNameType";

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

	return (
		<a href={urlWithRef} target="_blank" rel="noreferrer" className="cursor-pointer">
			<Card className="p-2">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<CardImage src={iconSrc} />
						<CardTitle className="mt-1">{item?.name}</CardTitle>
					</div>
					<div>
						<CardDescription className="mt-1">{item?.description}</CardDescription>
					</div>
				</div>
			</Card>
		</a>
	);
};

export const ToolCards = ({ items, className }: ToolCardsProps) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5", className)}>
			{items.map((item, index) => (
				<div key={index} className="relative group  block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
					<CardAnimation hoveredIndex={hoveredIndex} index={index} />
					<ToolCard item={item} />
				</div>
			))}
		</div>
	);
};
