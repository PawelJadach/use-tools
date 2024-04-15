import React from "react";
import { motion } from "framer-motion";

export default function SubmitNew() {
	return (
		<li>
			<motion.a whileHover={{ scale: 1.04, transition: { duration: 0.2 } }} className="block text-slate-200 bg-emerald-500 text-md transition-colors px-2.5 py-2 rounded-md relative" href="https://airtable.com/appkjDFX1Y65oA2ep/pag6II7NvwNMtJrFl/form" target="_blank">
				submit new
			</motion.a>
		</li>
	);
}
