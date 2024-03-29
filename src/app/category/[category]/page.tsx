import { getClient } from "@/lib/apollo";
import { getCategoryTools } from "@/queries/categories";
import { ToolCardsContainer } from "@/ui/Cards";
import { cn } from "@/utils/cn";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

type CategoryProps = {
	params: {
		category: string;
	};
};

const getToolsByCategory = cache(async (category: string) => {
	const { data } = await getClient().query({
		query: getCategoryTools,
		variables: {
			slug: category,
		},
	});

	if (!data || !data?.categories || !data?.categories[0]?.tools) {
		return notFound();
	}

	return data.categories[0].tools;
});

export default async function Category({ params }: CategoryProps) {
	const tools = await getToolsByCategory(params.category);

	return (
		<>
			<div className="max-w-5xl mx-auto px-8 mt-10 gap-4">
				<h2 className={cn(`text-2xl font-bold md:text-3xl bg-clip-text text-transparent text-emerald-500 mb-8`)}>{params.category}.</h2>
				{tools.length > 0 ? <ToolCardsContainer items={tools} /> : <p>Tools not found</p>}
			</div>
		</>
	);
}
