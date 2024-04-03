import { gradientClassName } from "@/config/constants";
import Image from "next/image";

export default async function Home() {
	return (
		<div className="w-full flex flex-col text-center items-center justify-center h-5/6">
			<Image className="mb-10" src="/header.svg" width={300} height={200} alt="Not found" />

			<h1 className={`text-4xl md:text-7xl font-bold bg-clip-text text-transparent ${gradientClassName}`}>Use-tools</h1>
			<p className="mt-4 text-neutral-300 max-w-lg">The place where you will find the tools and resources you need as a developer</p>
		</div>
	);
}
