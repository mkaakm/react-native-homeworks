import React from 'react';

import {store} from "./src/store/store";
import {Provider} from "react-redux";

import Tabs from "./src/navigation/Tabs";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

export default function App() {
  const client = new ApolloClient({
    uri: "http://192.168.0.41:3000/graphql",
    cache: new InMemoryCache()
  })
  return (
      <ApolloProvider client={client}>
          <Provider store={store}>
              <Tabs/>
          </Provider>
      </ApolloProvider>
  );
}



