import { Button } from "@/ui/Button";
import Image from "next/image";

export default async function HomePage() {
	return (
		<div className="w-full flex flex-col text-center items-center justify-center h-5/6">
			<Image className="mb-10" src="/header.svg" width={300} height={200} alt="Not found" />

			<h1 className="text-4xl md:text-7xl font-bold text-emerald-500">Use-tools</h1>
			<p className="mt-4 text-neutral-300 text-xl">
				Tools and resources for <b>YOUR WORK</b>
			</p>
			<Button href="/tool" className="p-3 px-8 mt-6" isActive>
				Lets Explore
			</Button>
		</div>
	);
}
