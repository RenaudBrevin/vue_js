<template>
    <form @submit.prevent="addContact">
      <input v-model="formContact.telNumber" type="tel" placeholder="Numéro">
      <input v-model="formContact.name" type="text" placeholder="Nom">
      <button  type="submit">Ajouter un contact</button>
    </form>
</template>

<script>
export default {
    name : "FormContact",
    emits: [
      "addContact"
    ],
    data(){
      return {
      formContact :{
        telNumber: "",
        name: ""
      }
    }
  },
  methods:{
    addContact(){
      if(this.formContact.telNumber == "" || this.formContact.name == "") return
      
      this.$store.commit("addContact", this.formContact)

      this.formContact = {
        telNumber: "",
        name: ""
      }
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    position: absolute;
    width: 300px;
    height: 200px;
    padding: 30px;
    border-radius: 15px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input{
    margin: 10px;
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>