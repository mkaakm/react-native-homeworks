import React from 'react';

import Tabs from "./src/navigation/Tabs";
import Profile from "./src/components/Profile/Profile";
import {ApolloProvider} from "@apollo/client";

import client from "./src/graphql/appoloClient";
export default function App() {
  return (
      <ApolloProvider client={client}>
        {/*<Tabs/>*/}
        <Profile/>
      </ApolloProvider>
  );
}




