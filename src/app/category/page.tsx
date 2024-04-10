import { getClient } from "@/lib/apollo";
import { getCategoriesQuery } from "@/queries/categories";
import List from "@/ui/pages/List";
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

	return <List items={categories} type="category" />;
}
