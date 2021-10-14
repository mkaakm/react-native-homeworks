import React from 'react';
import {StyleSheet} from 'react-native';

import Tabs from "./src/navigation/Tabs";
import Profile from "./src/components/Profile/Profile";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";


export default function App() {
  const client = new ApolloClient({
    uri: "http://192.168.0.41:3000/graphql",
    cache: new InMemoryCache()
  })
  return (
      <ApolloProvider client={client}>
        {/*<Tabs/>*/}
        <Profile/>
      </ApolloProvider>
  );
}

const styles = StyleSheet.create({

});



