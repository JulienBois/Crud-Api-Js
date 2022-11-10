<script setup>
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
        <input id="email" type="email" class="form-control" v-model="email" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="password">Mot de passe : </label>
      </div>
      <div class="col">
        <input id="password" type="password" class="form-control" v-model="password" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-success" v-on:click="login">Se connecter</button>
      </div>
      <div class="col">
        <button class="btn btn-primary" @click="createAccount">Créer compte</button>
      </div>
    </div>
    <div class="row">
      <p v-if="erreur">Identifiants incorrects</p>
    </div>
    <h4>{{ token }}</h4>
  </div>
</template>

<script>
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default {
  data() {
    return {
      email: null,
      password: null,
      erreur: false,
    }
  },
  methods: {
    async login() {
      await axios.post("http://localhost:3000/user/login", { email: this.email, password: this.password }, {
        'Content-Type': 'application/x-www-form-urlencoded',
        // "Access-Control-Allow-Origin": "*",
        'Accept': '*',
      }).then((response) => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role",jwt_decode(localStorage.getItem("token")).role);
        this.$router.push({ name: 'user' });
      }).catch((error) => {
        this.erreur = true;
      })
    },

    async createAccount() {
      let result = await axios.post("http://localhost:3000/user/register", { email: this.email, password: this.password });
      console.log(result);
    }
  }
}
</script>