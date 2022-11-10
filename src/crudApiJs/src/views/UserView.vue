<template>
  <div>
    <header>
      <div class="row">
        <div class="col">
          <p>Accueil</p>
        </div>
        <div class="col"><button class="btn btn-danger" v-on:click="disconnect">Se déconnecter</button></div>
      </div>
    </header>

    <body>
      <table class="table table-dark table-striped-columns table-hover" v-if="posts">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Contenu</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post of posts">
            <td>{{ post.title }}</td>
            <td>{{ post.content }}</td>
          </tr>
        </tbody>
      </table>
      <nav>
        <RouterLink :to="{ name: 'post' }"><button class="btn btn-success" v-if="admin = true">Créer un post</button>
        </RouterLink>
      </nav>
    </body>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: null,
      erreur: null,
      admin: false
    }
  },
  beforeMount() {
    this.token = this.$data
    console.log(this.token);
  },
  methods: {
    disconnect() {
      localStorage.clear();
      console.log(localStorage.getItem("token"));
      this.$router.push("/");
    },
    async getPosts() {
      await axios.get("http://localhost:3000/posts").then((response) => {
        this.posts = response.data;
        console.log(this.posts);
      }).catch((error) => {
        this.erreur = "Une erreur est survenue"
      })
    }
  },
  mounted() {
    if (localStorage.getItem("token") == null) {
      this.$router.push("/");
    }
    if (localStorage.getItem("role") == "admin") {
      this.admin = true;
      console.log(this.admin);
    }
    this.getPosts();

  }

}
</script>