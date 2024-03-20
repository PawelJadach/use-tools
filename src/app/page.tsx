import { gradientClassName, maxWidthClass } from "@/config/constants";
import { getCategories } from "@/services/categories.service";
import { Cards } from "@/ui/Cards";
import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
	noStore();

	const categories = await getCategories();
	return (
		<>
			<div className="h-[15rem] md:h-[30rem] w-full flex flex-col text-center items-center justify-center">
				<h1 className={`text-4xl md:text-7xl font-bold bg-clip-text text-transparent ${gradientClassName}`}>Use-tools</h1>
				<p className="mt-4 text-neutral-300 max-w-lg">The place where you will find the tools and resources you need as a developer</p>
			</div>
			<div className="max-w-5xl mx-auto px-4">
				<Cards items={categories} />
			</div>
		</>
	);
}
