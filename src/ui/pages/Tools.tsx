import { maxWidthClass } from "@/config/constants";
import React from "react";
import Header from "../Header";
import { ToolCardsContainer } from "../Cards";
import { Tools as ToolsType } from "@/queries/categories";

type ToolsProps = {
	items: ToolsType;
	header: string;
};

export default function Tools({ items, header }: ToolsProps) {
	return (
		<div className={`w-full mx-auto gap-4 grow ${maxWidthClass}`}>
			<Header>{header}</Header>
			<ToolCardsContainer items={items} />
		</div>
	);
}
