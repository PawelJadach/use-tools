import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
const GRAPHQL_TOKEN = process.env.GRAPHQL_TOKEN;

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: GRAPHQL_ENDPOINT,
			headers: {
				authorization: `Bearer ${GRAPHQL_TOKEN}`,
			},
			// you can disable result caching here if you want to
			// (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
			// fetchOptions: { cache: "no-store" },
		}),
	});
});