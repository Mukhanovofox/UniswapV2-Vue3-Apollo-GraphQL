<template>
    <div class="home container">
        <bounce-loader :loading="loading" :color="color" :size="size"></bounce-loader>
        <h2 v-if="error" style="color: red;">Error: {{ error.message }}</h2>
        <template v-if="result && !loading">
            <h1>Uniswap V2 | Pairs</h1>
            <div class="tokenBlock" v-for="item of result.pairs" :key="item.id">
                <div class="inBlock">
                    <div class="content">
                        <p>[token0]</p>
                        <p>symbol: {{ item.token0.symbol }}</p>
                        <p>name: {{ item.token0.name }}</p>
                        <p>totalLiquidity: {{ item.token0.totalLiquidity }}</p>
                        <p>totalSupply: {{ item.token0.totalSupply }}</p>
                    </div>
                </div>
                <div class="inBlock">
                    <div class="content">
                        <p>[token1]</p>
                        <p>symbol: {{ item.token1.symbol }}</p>
                        <p>name: {{ item.token1.name }}</p>
                        <p>totalLiquidity: {{ item.token1.totalLiquidity }}</p>
                        <p>totalSupply: {{ item.token1.totalSupply }}</p>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import {useQuery} from '@vue/apollo-composable';
    import gql from "graphql-tag";
    import BounceLoader from 'vue-spinner/src/BounceLoader.vue'

    export default {
        data() {
            return {
                color: '#5bc0de',
                size: '45px',
            }
        },
        components: {
            BounceLoader
        },
        setup() {
            const {result, loading, error } = useQuery(gql`
              query getPairs {
                pairs {
                  id
                  token0 {
                    symbol
                    name
                    totalSupply
                    totalLiquidity
                  }
                  token1 {
                    symbol
                    name
                    totalSupply
                    totalLiquidity
                  }
                }
              }
            `)

            return {
                result,
                loading,
                error
            }
        },
    }
</script>
<style scoped lang="scss">
    .container {
        max-width: 1000px;
        margin: 0 auto;
        display: block;
    }

    h1{
        display: table;
        margin: 0 auto 50px;
    }

    .tokenBlock {
        display: flex;
        border: 1px solid #ccc;
        border-radius: 6px;
        width: 100%;
        box-shadow: 0 0 13px #eee;
        font-size: 14px;
        & + .tokenBlock {
            margin-top: 20px;
        }
        .inBlock {
            display: inline-flex;
            flex-grow: 1;
            width: 50%;
            border: 1px solid transparent;
            height: 100%;
            padding: 20px;
            p {
                display: table;
                margin: 0 0 10px;
            }
            & + .inBlock {
                border-left: 1px solid #ccc;
            }
        }
    }

    .v-spinner {
        position: fixed;
        top: 50%;
        left: 50%;
        margin: -25px 0 0 -25px;
    }
</style>