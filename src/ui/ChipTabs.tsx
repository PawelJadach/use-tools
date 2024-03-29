"use client";
import { gradientClassName } from "@/config/constants";
import { Categories } from "@/queries/categories";
import { Tags } from "@/queries/tags";
import { motion } from "framer-motion";
import { useState } from "react";
import { Cards } from "./Cards";

type ChipTabsProps = {
	categories: Categories;
	tags: Tags;
};

const tabs = ["Categories", "Tags"];

const ChipTabs = ({ categories, tags }: ChipTabsProps) => {
	const [selected, setSelected] = useState(tabs[0]);

	return (
		<>
			<div className="max-w-5xl mx-auto px-4 flex items-center justify-center flex-wrap gap-2">
				{tabs.map((tab) => (
					<Chip text={tab} selected={selected === tab} setSelected={setSelected} key={tab} />
				))}
			</div>
			<div className="max-w-5xl mx-auto px-4">
				<Cards type={selected} items={selected === "Categories" ? categories : tags} />
			</div>
		</>
	);
};

type ChipProps = {
	text: string;
	selected: boolean;
	setSelected: (text: string) => void;
};

const Chip = ({ text, selected, setSelected }: ChipProps) => {
	return (
		<button onClick={() => setSelected(text)} className={`${selected ? "text-white" : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"} text-md transition-colors px-2.5 py-0.5 rounded-md relative`}>
			<span className="relative z-10">{text}</span>
			{selected && <motion.span layoutId="pill-tab" transition={{ type: "spring", duration: 0.5 }} className={`absolute inset-0 z-0 ${gradientClassName} rounded-md`}></motion.span>}
		</button>
	);
};

export default ChipTabs;
