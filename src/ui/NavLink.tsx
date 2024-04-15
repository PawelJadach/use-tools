"use client";
import React from "react";
import { Button } from "./Button";
import { usePathname } from "next/navigation";

type NavLinkProps = {
	href: string;
	label: string;
	className?: string;
};

export default function NavLink({ href, label, className }: NavLinkProps) {
	const pathname = usePathname();
	const isActive = href === pathname;

	return (
		<li>
			<Button className={className} isActive={isActive} href={href}>
				{label}
			</Button>
		</li>
	);
}
