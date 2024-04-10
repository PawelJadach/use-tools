"use client";
import { Categories } from "@/queries/categories";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardAnimation, CardTitle } from "./Card";
import FilterInput from "./FilterInput";
import Image from "next/image";
import { classNameType } from "@/utils/classNameType";

export type Type = "category" | "tag" | "tool";

type TypeCardsProps = {
	items: Categories;
	className?: classNameType;
	type: Type;
};

const getUrlByType = (type: Type) => {
	switch (type) {
		case "category":
			return "/category/";
		case "tag":
			return "/tag/";
		default:
			return "/";
	}
};

export const TypeCards = ({ items, className, type }: TypeCardsProps) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [search, setSearch] = useState("");

	useEffect(() => {
		return () => setSearch("");
	}, [type]);

	const filteredItems = items.filter((item) => item?.name?.toLowerCase().includes(search.toLowerCase()) || item?.slug?.toLowerCase().includes(search.toLowerCase()));

	return (
		<>
			<FilterInput type={type} value={search} onChange={(e) => setSearch(e.target.value)} />
			{filteredItems.length > 0 ? (
				<div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5", className)}>
					{filteredItems.map((item, index) => (
						<Link href={`${getUrlByType(type)}${item?.slug}`} key={"/" + item?.slug} className="relative group block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
							<CardAnimation hoveredIndex={hoveredIndex} index={index} />
							<Card>
								<CardTitle className="text-center">{item?.name}</CardTitle>
							</Card>
						</Link>
					))}
				</div>
			) : (
				<div className="flex flex-col justify-center items-center mt-24">
					<Image className="mb-10" src="/not-found.svg" width={300} height={200} alt="Not found" />
					<h1 className="text-2xl font-bold bg-clip-text text-transparent leading-[3rem] text-emerald-500">No results, try something else...</h1>
				</div>
			)}
		</>
	);
};
