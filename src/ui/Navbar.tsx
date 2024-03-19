import React from "react";
import { Button } from "./Button";

export default function Navbar() {
	return (
		<div className="py-6 px-4 flex justify-between items-center max-w-5xl mx-auto z-[100]">
			<Button href="/">Use Tools</Button>
		</div>
	);
}
