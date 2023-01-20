<template>
    <div>
        <h2>{{ contact.name }}</h2>
        <span>Téléphone: 0{{ contact.telNumber }}</span>
        <button v-on:click="addCall(contact)">Appeller</button>
    </div>
</template>
<script>
export default {    
    name: 'CardContact',
    props: {
        contact: {
            type: Object,
        }
    },
    methods: {
        addCall(call) {
            let date = new Date();
            let createCall = { ...call, date: date.toLocaleString('fr-FR'), id: Date.now() }
            if(createCall.name == "") createCall.name = 'Inconnu'
            this.$store.commit('addCall', createCall)
        }
    }   
}
</script>
<style>
    
</style>