import { getClient } from "@/lib/apollo";
import { getAllTools } from "@/queries/tools";
import Tools from "@/ui/pages/Tools";
import { notFound } from "next/navigation";
import { cache } from "react";

const getTools = cache(async () => {
	const { data } = await getClient().query({
		query: getAllTools,
	});

	if (!data || !data?.tools) {
		return notFound();
	}

	return data.tools.filter((tool) => tool?.status === "Ready");
});

export default async function ToolPage() {
	const tools = await getTools();

	return <Tools header="all tools." items={tools} />;
}
