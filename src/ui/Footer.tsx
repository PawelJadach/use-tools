import { maxWidthClass } from "@/config/constants";
import React from "react";

export default function Footer() {
	return (
		<footer className={`${maxWidthClass} text-zinc-400 px-4 mx-auto flex flex-wrap items-center justify-center py-8`}>
			<p className="text-sm text-center">
				© Copyright 2024, All Rights Reserved by <span className="font-bold">Use-tools</span>
			</p>
		</footer>
	);
}
