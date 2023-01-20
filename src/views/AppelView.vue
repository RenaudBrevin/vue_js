<template>
    <div>
        <h1>Passer un appel</h1>
        <h2>{{ toCall.telNumber }}</h2>
        <span v-if="getContact()">Appeller :  {{ toCall.name }}</span>
        <Clavier @addNumber="addNumber"/>
        <button v-on:click="addCall(toCall)">Appeller</button>
    </div>
</template>
<script>
import Clavier from '@/components/ClavierCall.vue'
export default {
    name: 'AppelView',
    components: {
        Clavier
    },
    emits: [
        'addNumber'
    ],
    data(){
        return{
            toCall:{
                telNumber: "",
                name: ""
            }
        }
    },
    methods: {
        addNumber(number){
            this.toCall.telNumber += number
            if(this.getContact()) 
            {
                this.toCall.name = this.getContact().name
            }
            else this.toCall.name = ""
        },
        getContact(){
            return this.$store.state.contacts.find(contact => contact.telNumber == this.toCall.telNumber)
        },
        addCall(call) {
            let date = new Date();
            let createCall = { ...call, date: date.toLocaleString('fr-FR'), id: Date.now() }
            if(createCall.name == "") createCall.name = 'Inconnu'
            this.$store.commit('addCall', createCall)
        }
    }
}
</script>
<style scoped>

</style>
