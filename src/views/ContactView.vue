<template>
  <div>
      <h1>Contact</h1>
      <button class="addContactButton"><router-link to="/addContact">Ajouter un contact</router-link></button>
    <div v-for="contact in contacts" :key="contact.telNumber" class="contact">
      <CardContact :contact="contact"/>
    </div>
  </div>
</template>
<script>
import CardContact from '@/components/CardContact.vue'
export default {
  name: 'ContactView',
  components: {
    CardContact
  },
  data(){
    return{
      showForm: false,
      text: "Ajouter un contact"
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  },
}
</script>
<style scoped>
  .addContactButton{
    position: absolute;
    top: 50px;
    right: 50px;
  }

  .contact{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 40%;
    border: 1px solid black;
    margin: 10px;
  }
</style>