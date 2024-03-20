import { connectMongo } from "@/lib/dbConnection";
import Category from "@/models/Category";
import CategoryModel from "@/models/Category";
import Tool from "@/models/Tool";

export const getCategories = async () => {
	try {
		connectMongo();

		const allCategories = await CategoryModel.find({}, { title: 1, description: 1, slug: 1, _id: 0 }).exec();

		return JSON.parse(JSON.stringify(allCategories));
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const getTools = async (slug: string) => {
	try {
		connectMongo();
		const category = await Category.findOne({ slug }).exec();
		const tools = await Tool.find({ category: category._id }, { title: 1, description: 1, href: 1, image: 1, _id: 0 }).exec();

		return JSON.parse(JSON.stringify(tools));
	} catch (error) {
		console.error(error);
		return [];
	}
};
