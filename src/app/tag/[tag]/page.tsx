import { getClient } from "@/lib/apollo";
import { getTagToolsQuery } from "@/queries/tags";
import { ToolCardsContainer } from "@/ui/Cards";
import { cn } from "@/utils/cn";
import { unstable_noStore as noStore } from "next/cache";
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
		<>
			<div className="max-w-5xl mx-auto px-8 mt-10 gap-4">
				<h2 className={cn(`text-2xl font-bold md:text-3xl bg-clip-text text-transparent text-emerald-500 mb-8`)}>{params.tag}.</h2>
				{tools.length > 0 ? <ToolCardsContainer items={tools} /> : <p>Tools not found</p>}
			</div>
		</>
	);
}
