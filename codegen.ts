import { CodegenConfig } from "@graphql-codegen/cli";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT as string;
const GRAPHQL_TOKEN = process.env.GRAPHQL_TOKEN;

const config: CodegenConfig = {
	documents: ["src/queries/**/*.{ts,tsx}"],
	schema: {
		[GRAPHQL_ENDPOINT]: {
			headers: {
				Authorization: `Bearer ${GRAPHQL_TOKEN}`,
			},
		},
	},
	generates: {
		"./.graphql/": {
			preset: "client",
			plugins: [],
			presetConfig: {
				gqlTagName: "gql",
			},
			config: {
				skipTypename: true,
				useTypeImports: true,
				avoidOptionals: true,
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;
