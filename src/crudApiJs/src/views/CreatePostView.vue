<template>
    <div>
        <header>
            <div class="row">
                <div class="col">
                    <p>Création nouveau post</p>
                </div>
                <div class="col"><button class="btn btn-danger" v-on:click="disconnect">Se déconnecter</button></div>
            </div>
        </header>

        <body>
            <div class="mb-3">
                <label for="title" class="form-label">Titre :</label>
                <input type="text" class="form-control" id="title" v-model="title" />
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Contenu :</label>
                <input type="text" class="form-control" id="content" v-model="content" />
            </div>
            <button @click="createPost" type="submit" class="btn btn-primary">Confirmer</button>
        </body>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: null,
            content: null,
        }
    },
    mounted() {
        if (localStorage.getItem("token") == null) {
            this.$router.push("/");
        }
    },
    methods: {
        disconnect() {
            localStorage.setItem("token", null);
            console.log(localStorage.getItem("token"));
            this.$router.push("/");
        },

        async createPost() {
            console.log(localStorage.getItem("token"));
            let headers = { "authorization": localStorage.getItem("token") };
            await axios.post("http://localhost:3000/posts", { title: this.title, content: this.content }, { headers }).then((response) => {
                this.$router.push("/user");
            });
        }
    }
}
</script>