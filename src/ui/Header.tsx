import { cn } from "@/utils/cn";
import React from "react";

export default function Header({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <h2 className={cn(`text-2xl font-bold md:text-3xl text-emerald-500 mb-8 text-center mt-10`)}>{children}</h2>;
}
