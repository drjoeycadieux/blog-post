import { createApp, provide, h } from 'vue';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import router from './router'; // Import from the file we made above

// 1. Setup GraphQL
const httpLink = createHttpLink({
  uri: 'https://your-api-endpoint.com/graphql',
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// 2. Setup the Vue App
const app = createApp({
  setup() {
    // This provides GraphQL to all components
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

// 3. Use the Router and Mount
app.use(router);
app.mount('#app');
