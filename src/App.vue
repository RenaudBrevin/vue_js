<template>
  <nav>
    <router-link to="/">Contact</router-link>
    <router-link to="/appel">Appel</router-link>
    <router-link to="/journal">Journal d'appels</router-link>
  </nav>
  <router-view/>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  nav{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #333;
    color: #fff;
    padding: 10px;
    padding-bottom: 32%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  a{
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
    padding: 5px;
  }
  a.active{
    text-decoration: underline;
  }
  a:hover{
    text-decoration: underline;
  }
  #app{
    display: flex;
    flex-direction: row;
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(241, 241, 241);
  }
  button{
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }

  #app > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        width: 85%;
        margin-left: 15%;
        position: relative;
        right: 0;
    }
    h1{
        text-align: center;
        margin: 30px;
    }
</style>
