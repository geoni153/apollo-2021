import { InMemoryCache, ApolloClient, gql } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/",
    resolvers: {
        Movie: {
            isLiked: () => false
        },
        Mutation: {
            toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
                const myMovie = {
                    __typename: 'Movie',
                    id: `${id}`,
                    isLiked: `${isLiked}`
                };
                cache.modify({
                    id: cache.identify(myMovie),
                    fields: {
                        isLiked(cachedName) {
                            return !isLiked;
                        }
                    }
                });
            }
        }
    }
});

export default client;