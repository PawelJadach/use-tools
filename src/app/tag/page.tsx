import { getClient } from "@/lib/apollo";
import { getTagsQuery } from "@/queries/tags";
import { Cards } from "@/ui/Cards";
import { notFound } from "next/navigation";
import { cache } from "react";

const getTags = cache(async () => {
	const { data } = await getClient().query({
		query: getTagsQuery,
	});

	if (!data.tags) {
		return notFound();
	}

	return data.tags;
});

export default async function Tags() {
	const tags = await getTags();

	return (
		<div className="grow w-full max-w-5xl mx-auto px-4">
			<Cards type="Tags" items={tags} />
		</div>
	);
}
