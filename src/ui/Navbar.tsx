import React from "react";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className="py-6 px-4 flex justify-between items-center max-w-5xl mx-auto z-[100]">
			<Link href="/">
				<Image className="transition-all duration-125 transform hover:scale-125" alt="Use tools logo" src="/favicon-32x32.png" width={32} height={32} />
			</Link>
		</div>
	);
}
