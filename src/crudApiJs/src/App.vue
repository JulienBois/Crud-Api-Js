<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">  
    <p>Connexion</p>
    </div>
  </header>
  <div class="container">
    <div class="row">
      <div class="col">
        <label for="email">Email : </label>
      </div>
      <div class="col">
        <input id="email" type="email" class="form-control"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="password">Mot de passe : </label>
      </div>
      <div class="col">
        <input id="password" type="password" class="form-control"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-success" v-on:click="login">Se connecter</button>
      </div>
      <div class="col">
        <button class="btn btn-primary" v-on:click="createAccount">Créer compte</button>
      </div>
    </div>
    <div class="row">
      <p v-if="erreur">Identifiants incorrects</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
  export default {
    data(){
      email : null
      password : null
      erreur: false
    },
    methods:{
      async login() {
        let result = await axios.post("localhost:3000/user/login",{email : this.email, password: this.password});
        console.log(result);
      },

      async createAccount(){
        let result = await axios.post("localhost:3000/user/register",{email: this.email, password: this.password});
        console.log(result);
      }
    }
    
  }
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
