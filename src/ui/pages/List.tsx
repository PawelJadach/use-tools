import React from "react";
import { Cards } from "../Cards";
import { maxWidthClass } from "@/config/constants";
import { Categories } from "@/queries/categories";
import { Tags } from "@/queries/tags";

type ListProps = {
	items: Categories | Tags;
	type: "Tags" | "Categories";
};

export default function List({ items, type }: ListProps) {
	return (
		<div className={`grow w-full mx-auto px-4 ${maxWidthClass}`}>
			<Cards type={type} items={items} />
		</div>
	);
}
