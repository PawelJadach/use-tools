import { models, model, Schema, Types } from "mongoose";
import { ICategory } from "./Category";

export interface ITool {
	title: string;
	description: string;
	href: string;
	image: string;
	category: ICategory;
}

const ToolSchema: Schema<ITool> = new Schema<ITool>({
	href: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	category: {
		type: Types.ObjectId,
		required: true,
		ref: "Category",
	},
});

const Tool = models.Tool || model("Tool", ToolSchema);

export default Tool;
