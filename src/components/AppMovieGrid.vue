<script>
import {store} from "../store"
import AppMovieCard from "./AppMovieCard.vue";

export default{
  data(){
    return{
      store
    }
  },
  methods:{

  },
  components :{
    AppMovieCard
  }
}
</script>

<template>
    <div class="main-container">
        <div class="row">
            <div class="col" v-for="(movie, movieIndex) in store.moviesArray" :key="movieIndex">
                <AppMovieCard :title="movie.title" :original_title="movie.original_title" :overview="movie.overview" :vote_average="movie.vote_average" :original_language="movie.original_language" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
 
.row{
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 2em;

        .col{
            width: calc(100% / 5 - 2em);
        }
}

</style>