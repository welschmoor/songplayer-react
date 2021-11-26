import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import {client} from "./graphql/client"

ReactDOM.render(
  <ApolloProvider client={client} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
  ,
  document.getElementById('root')
);
