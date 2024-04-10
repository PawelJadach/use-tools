"use client";
import { Button } from "@/ui/Button";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="w-full flex flex-col text-center items-center justify-center">
			<Image className="mb-10" src="/not-found.svg" width={300} height={200} alt="Not found" />
			<h1 className={`text-4xl font-bold bg-clip-text text-transparent leading-[3rem] text-emerald-500`}>Something went wrong!</h1>
			<Button className="mt-3" onClick={reset}>
				Try again
			</Button>
		</div>
	);
}
