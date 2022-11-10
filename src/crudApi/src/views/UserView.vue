<script setup>
</script>

<template>
    <div>
  <header>
    <div class="wrapper">
      <p>Accueil</p>
      <div class="table table-dark table-striped-columns table-hover" v-if="posts">
        <thead>
            <tr>
                <th scope="col">Titre</th>
                <th scope="col">Contenu</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post of posts">
                <td>{{post.title}}</td>
                <td>{{post.content}}</td>
            </tr>
        </tbody>
      </div>
    </div>
  </header>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts : null,
      erreur: null,
    }
  },
  beforeMount(){
    this.token = this.$data
    console.log(this.token);
  },   
  mounted () {
    axios.get("http://localhost:3000/posts").then((response) => {
            this.posts = response.data;
            console.log(this.posts);
        }).catch((error) =>{
            this.erreur = "Une erreur est survenue"
        })
  }

}
</script>