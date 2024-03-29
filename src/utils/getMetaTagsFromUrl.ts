import axios from "axios";
import cheerio from "cheerio";

export async function getMetaTagsFromUrl(url: string) {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);

		let extractedIconPath = $('link[rel="icon"]').prop("href") ?? $('link[rel="shortcut icon"]').prop("href") ?? "favicon.ico";

		const parsedUrl = new URL(url);
		const getUrl = (url: string) => {
			if (url.startsWith("http")) {
				return url;
			} else if (url.startsWith("//")) {
				return `${parsedUrl.protocol}${url}`;
			} else {
				const iconPathname = extractedIconPath;
				return `${parsedUrl.origin}${iconPathname}`;
			}
		};

		return {
			url,
			favicon: getUrl(extractedIconPath),
			image: getUrl($("meta[property='og:image']").attr("content") as string),
			description: $("meta[name='description']").attr("content"),
			title: $("meta[property='og:title']").attr("content"),
		};
	} catch (error) {
		return { error: error.message };
	}
}
