import { InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(0),
    uri: "http://localhost:4000/"
});

export default client;