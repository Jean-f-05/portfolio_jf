import { GET_HOME } from "./queries"

const endpoint = process.env.GRAPHQL_HOST || ""


const getData = async () => {
    const res = await fetch(endpoint!, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.GRAPHQL_TOKEN}`!,
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            query: GET_HOME,
        }),
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default getData