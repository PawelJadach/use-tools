import { client } from "@/lib/client";

type Category = {
	name: string;
	description: string;
	slug: string;
};

type MappedCategory = {
	title: string;
	description: string;
	link: string;
};

type CategoriesResponse = {
	records: {
		fields: Category;
	}[];
};

const mapCategories = (categories: CategoriesResponse["records"]): MappedCategory[] => {
	return categories.map(({ fields }) => ({
		title: fields.name,
		description: fields.description,
		link: `/${fields.slug}`,
	}));
};

export const getCategories = async () => {
	const { data } = await client.get<CategoriesResponse>("/categories");

	return mapCategories(data.records);
};

export const getTools = async (categoryName: string) => {
	const { data } = await client.get<CategoriesResponse>("/tools");
	console.log(data);
};
