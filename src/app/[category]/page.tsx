import { getTools } from "@/services/categories.service";
import { Card, CardDescription, CardImage, CardTitle, Cards, ToolCard, ToolCardsContainer } from "@/ui/Cards";
import { cn } from "@/utils/cn";

type CategoryProps = {
	params: {
		category: string;
	};
};

const tools = [
	{
		href: "https://www.google.com",
		image: "/logos/tailwind.png",
		title: "Test title",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, repellendus!",
	},
	{
		href: "https://www.google.com",
		image: "/logos/tailwind.png",
		title: "Test title",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, repellendus!",
	},
	{
		href: "https://www.google.com",
		image: "/logos/tailwind.png",
		title: "Test title",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, repellendus!",
	},
	{
		href: "https://www.google.com",
		image: "/logos/tailwind.png",
		title: "Test title",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, repellendus!",
	},
];

export default async function Category({ params }: CategoryProps) {
	return (
		<>
			<div className="max-w-5xl mx-auto px-8 mt-10 gap-4">
				<h2 className={cn(`text-2xl font-bold md:text-3xl bg-clip-text text-transparent text-emerald-500 mb-8`)}>{params.category}.</h2>
				<ToolCardsContainer items={tools} />
			</div>
		</>
	);
}
