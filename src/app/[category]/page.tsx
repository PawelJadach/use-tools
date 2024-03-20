import { getTools } from "@/services/categories.service";
import { ToolCardsContainer } from "@/ui/Cards";
import { cn } from "@/utils/cn";
import { unstable_noStore as noStore } from "next/cache";

type CategoryProps = {
	params: {
		category: string;
	};
};

export default async function Category({ params }: CategoryProps) {
	noStore();
	const tools = await getTools(params.category);

	return (
		<>
			<div className="max-w-5xl mx-auto px-8 mt-10 gap-4">
				<h2 className={cn(`text-2xl font-bold md:text-3xl bg-clip-text text-transparent text-emerald-500 mb-8`)}>{params.category}.</h2>
				{tools.length > 0 ? <ToolCardsContainer items={tools} /> : <p>Tools not found</p>}
			</div>
		</>
	);
}
