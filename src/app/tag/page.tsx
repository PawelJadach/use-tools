import { getClient } from "@/lib/apollo";
import { getTagsQuery } from "@/queries/tags";
import List from "@/ui/pages/List";
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

	return <List items={tags} type="Tags" />;
}
