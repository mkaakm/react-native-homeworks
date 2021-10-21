import {ApolloClient, InMemoryCache} from "@apollo/client";
import {uri} from "./config";
const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
})

export default client
