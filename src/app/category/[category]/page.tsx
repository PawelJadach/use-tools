import { getClient } from "@/lib/apollo";
import { getCategoryTools } from "@/queries/categories";
import Tools from "@/ui/pages/Tools";
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

	return data.categories[0].tools.filter((tool) => tool?.status === "Ready");
});

export default async function Category({ params }: CategoryProps) {
	const tools = await getToolsByCategory(params.category);

	return <Tools header={`${params.category}.`} items={tools} />;
}
