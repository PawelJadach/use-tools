import { gradientClassName } from "@/config/constants";
import { Button } from "@/ui/Button";
import Image from "next/image";

export default function NotFound() {
	return (
		<div className="w-full flex flex-col text-center items-center justify-center">
			<Image className="mb-10" src="/not-found.svg" width={300} height={200} alt="Not found" />
			<h1 className={`text-4xl font-bold bg-clip-text text-transparent leading-[3rem] ${gradientClassName}`}>Page not found</h1>
			<Button className="mt-3" href="/">
				Go to home page
			</Button>
		</div>
	);
}
