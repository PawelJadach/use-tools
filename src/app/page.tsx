import { gradientClassName } from "@/config/constants";
import { getClient } from "@/lib/apollo";
import { getCategoriesQuery } from "@/queries/categories";
import { getTagsQuery } from "@/queries/tags";
import ChipTabs from "@/ui/ChipTabs";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";

const getCategories = cache(async () => {
	const { data } = await getClient().query({
		query: getCategoriesQuery,
	});

	if (!data.categories) {
		return notFound();
	}

	return data.categories;
});

const getTags = cache(async () => {
	const { data } = await getClient().query({
		query: getTagsQuery,
	});

	if (!data.tags) {
		return notFound();
	}

	return data.tags;
});

export default async function Home() {
	const categories = await getCategories();
	const tags = await getTags();
	return (
		<>
			<div className="h-[15rem] md:h-[30rem] w-full flex flex-col text-center items-center justify-center">
				<h1 className={`text-4xl md:text-7xl font-bold bg-clip-text text-transparent ${gradientClassName}`}>Use-tools</h1>
				<p className="mt-4 text-neutral-300 max-w-lg">The place where you will find the tools and resources you need as a developer</p>
			</div>
			<ChipTabs categories={categories} tags={tags} />
		</>
	);
}
