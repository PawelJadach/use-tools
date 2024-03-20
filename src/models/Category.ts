import { models, model, Schema } from "mongoose";

export interface ICategory {
	slug: string;
	description: string;
	title: string;
}

const CategorySchema = new Schema<ICategory>(
	{
		slug: {
			type: String,
			unique: true,
		},
		title: String,
		description: String,
	},
	{
		timestamps: true,
	},
);

const Category = models.Category || model("Category", CategorySchema);

export default Category;
