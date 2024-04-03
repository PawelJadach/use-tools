import { getClient } from "@/lib/apollo";
import { getTagToolsQuery } from "@/queries/tags";
import { ToolCardsContainer } from "@/ui/Cards";
import Header from "@/ui/Header";
import { cn } from "@/utils/cn";
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

	return data.tags[0].tools;
});

export default async function Tag({ params }: TagProps) {
	const tools = await getToolsByTag(params.tag);

	return (
		<div className="w-full max-w-5xl mx-auto gap-4 grow">
			<Header>{params.tag}.</Header>
			{tools.length > 0 ? <ToolCardsContainer items={tools} /> : <p>Tools not found</p>}
		</div>
	);
}
