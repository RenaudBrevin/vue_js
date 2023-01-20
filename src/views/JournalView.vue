<template>
    <div>
        <h1>Journal d'appels</h1>
        <div v-for="call in getLastCall" :key="call.name" class="ancienCall">
            <p>{{ call.name }} : {{ call.telNumber }} <br> Le {{ call.date }}</p>
            <button v-on:click="addCall(call)">Rapeller</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'JournalView',
    data(){
    },
    computed: {
        getLastCall(){
            return this.$store.state.call
        },
    },
    methods: {
        addCall(call) {
            let date = new Date();
            let createCall = { ...call, date: date.toLocaleString('fr-FR'), id: Date.now() }
            this.$store.commit('addCall', createCall)
        }
    }
}
</script>
<style scoped>
    .ancienCall{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 100px;
        width: 40%;
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
    }
</style>