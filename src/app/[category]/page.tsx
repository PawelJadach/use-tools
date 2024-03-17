import { getTools } from "@/services/categories.service";
import { cn } from "@/utils/cn";

type CategoryProps = {
	params: {
		category: string;
	};
};

export const dynamic = "force-dynamic";

export default async function Category({ params }: CategoryProps) {
	return (
		<>
			<div className="max-w-5xl mx-auto px-8 mt-20">
				<h2 className={cn(`text-2xl font-bold md:text-3xl bg-clip-text text-transparent text-emerald-500`)}>{params.category}.</h2>
			</div>
		</>
	);
}
