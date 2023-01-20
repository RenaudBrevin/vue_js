<template>
    <div class="clavier">
        <div>
            <div v-for="number in [1,2,3,4,5,6,7,8,9]" :key="number">
                <button v-on:click="addNumber(number)">{{ number }}</button>
            </div>
        </div>
        <button v-on:click="addNumber(0)">0</button>
    </div>
</template>
<script>
export default {
    name: 'ClavierCall',
    methods: {
        addNumber(number){
            this.$emit('addNumber', number)
        }
    }
}
</script>
<style scoped>
    .clavier{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .clavier > div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 40%;
    }
    button{
        width: 50px;
        height: 50px;
        margin: 10px;
    }
</style>