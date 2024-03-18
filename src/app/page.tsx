import { gradientClassName } from "@/config/constants";
import { getCategories } from "@/services/categories.service";
import { Cards } from "@/ui/Cards";
import { Spotlight } from "@/ui/Spotlight";
import { cn } from "@/utils/cn";
import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
	noStore();

	const categories = await getCategories();
	return (
		<>
			<div className="h-[20rem] md:h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
				<Spotlight className="hidden md:block -top-40 left-0 md:left-60 md:-top-20" fill="white" />
				<div className="p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0">
					<h1 className={cn(`text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent`, gradientClassName)}>Use-tools</h1>
					<p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">The place where you will find the tools and resources you need as a developer.</p>
				</div>
			</div>
			<div className="max-w-5xl mx-auto px-4">
				<h2 className={cn(`text-2xl font-bold md:text-3xl bg-clip-text text-transparent text-emerald-500`)}>Categories.</h2>
				<Cards items={categories} />
			</div>
		</>
	);
}
