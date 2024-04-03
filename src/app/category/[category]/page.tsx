import { getClient } from "@/lib/apollo";
import { getCategoryTools } from "@/queries/categories";
import { ToolCardsContainer } from "@/ui/Cards";
import Header from "@/ui/Header";
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
		<div className="w-full max-w-5xl mx-auto gap-4 grow">
			<Header>{params.category}.</Header>
			{tools.length > 0 ? <ToolCardsContainer items={tools} /> : <p>Tools not found</p>}
		</div>
	);
}
