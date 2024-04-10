import { getClient } from "@/lib/apollo";
import { getTagToolsQuery } from "@/queries/tags";
import Tools from "@/ui/pages/Tools";
import { notFound } from "next/navigation";
import { cache } from "react";

type TagProps = {
	params: {
		tag: string;
	};
};

const getToolsByTag = cache(async (tag: string) => {
	const { data } = await getClient().query({
		query: getTagToolsQuery,
		variables: {
			slug: tag,
		},
	});

	if (!data || !data?.tags || !data?.tags[0]?.tools) {
		return notFound();
	}

	return data.tags[0].tools.filter((tool) => tool?.status === "Ready");
});

export default async function TagPage({ params }: TagProps) {
	const tools = await getToolsByTag(params.tag);

	return <Tools header={`${params.tag}.`} items={tools} />;
}
