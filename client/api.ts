import { GraphQLClient } from 'graphql-request';

// Check if the code is running in the client/browser
const isClient = typeof window !== 'undefined';

// Define the GraphQL endpoint dynamically based on the environment
const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}graphql`;

// Define a custom fetch function with credentials included only on the client
const customFetch: typeof fetch = (input, init) => {
  return fetch(input, {
    ...init,
    credentials: isClient ? 'include' : 'same-origin',  // 'include' only on the client
  });
};

// Initialize the GraphQL client
export const graphqlclient = new GraphQLClient(endpoint, {
  fetch: customFetch,
  headers: {
    'Content-Type': 'application/json',
  },
});
