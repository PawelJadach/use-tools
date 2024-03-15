import axios from "axios";

const AIRTABLE_ACCESS_TOKEN = process.env.AIRTABLE_ACCESS_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;

export const client = axios.create({
	baseURL: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`,
	headers: { Authorization: "Bearer " + AIRTABLE_ACCESS_TOKEN },
});
