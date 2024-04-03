import React, { ChangeEvent } from "react";

type FilterInputProps = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	type: string;
};

export default function FilterInput({ value, onChange, type }: FilterInputProps) {
	return <input className="input block mt-10 bg-transparent border-white/[0.2] mx-auto" placeholder={`Find ${type === "Categories" ? "Category" : "Tag"}`} value={value} onChange={onChange} type="text" />;
}
