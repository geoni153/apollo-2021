import { InMemoryCache, ApolloClient, gql } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/",
    resolvers: {
        Movie: {
            isLiked: () => false
        },
        Mutation: {
            likeMovie: (_, { id }, { cache }) => {
                cache.modify({
                    id: `Movie:${id}`,
                    fields: {
                        isLiked: () => true
                    }
                });
            }
        },
        unlikeMovie: (_, { id }, { cache }) => {
            cache.modify({
                id: `Movie:${id}`,
                fields: {
                    isLiked: () => true
                }
            });
        }
    }
});

export default client;