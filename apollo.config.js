// apollo.config.js
module.exports = {
    client: {
        service: {
            name: 'oraclus',
            // URL to the GraphQL API
            url: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
        },
        // Files processed by the extension
        includes: [
            'src/**/*.vue',
            'src/**/*.js',
        ],
    },
}