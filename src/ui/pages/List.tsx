import React from "react";
import { maxWidthClass } from "@/config/constants";
import { Categories } from "@/queries/categories";
import { Tags } from "@/queries/tags";
import { Type, TypeCards } from "../TypeCard";

type ListProps = {
	items: Categories | Tags;
	type: Type;
};

export default function List({ items, type }: ListProps) {
	return (
		<div className={`grow w-full mx-auto px-4 ${maxWidthClass}`}>
			<TypeCards type={type} items={items} />
		</div>
	);
}
