import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from './app';
import './index.css';

const unicornCardMerger = {
    keyArgs: ['pack'],
    merge(existing, incoming) {
        if (!existing) {
            return incoming;
        }
        else {
            return {
                ...existing,
                pageInfo: incoming.pageInfo,
                cards: [
                    ...existing.cards,
                    ...incoming.cards
                ]
            }
        }
    }
}

const apolloClient = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    cards: unicornCardMerger,
                    unicorns: unicornCardMerger
                }
            }
        }
    })
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);