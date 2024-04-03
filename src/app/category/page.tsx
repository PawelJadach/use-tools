import { getClient } from "@/lib/apollo";
import { getCategoriesQuery } from "@/queries/categories";
import { Cards } from "@/ui/Cards";
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

export default async function Categories() {
	const categories = await getCategories();

	return (
		<div className="grow w-full max-w-5xl mx-auto px-4">
			<Cards type="Categories" items={categories} />
		</div>
	);
}
