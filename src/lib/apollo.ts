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
		}),
	});
});
