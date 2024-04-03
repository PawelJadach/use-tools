import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import NavLink from "./NavLink";

export default function Navbar() {
	return (
		<div className="py-6 px-4 w-full max-w-5xl mx-auto flex justify-between">
			<Link href="/">
				<Image className="transition-all duration-125 transform hover:scale-125" alt="Use tools logo" src="/favicon-32x32.png" width={32} height={32} />
			</Link>
			<div>
				<ul className="flex gap-4">
					<NavLink href="/category" label="categories" />
					<NavLink href="/tag" label="tags" />
				</ul>
			</div>
		</div>
	);
}
