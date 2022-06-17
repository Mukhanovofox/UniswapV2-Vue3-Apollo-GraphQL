import { createApp, provide, h } from 'vue'
import { ApolloClient, createHttpLink , InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from './router'
import store from './store'
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apollo = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apollo)
    },
    render: () => h(App),
})

app.use(router).use(store).mount('#app');
