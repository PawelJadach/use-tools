import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/ui/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Use-tools",
	description: "Find all you need as a developer in one place",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="py-6 px-4 flex justify-between items-center max-w-5xl mx-auto z-[100]">
					<Button href="/">Use Tools</Button>
					<Button>Submit new resource</Button>
				</div>
				{children}
			</body>
		</html>
	);
}
