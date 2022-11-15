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
    
        <div class="row">
            <div class="col" v-for="(movie, movieIndex) in store.moviesArray" :key="movieIndex">
                <AppMovieCard :element="movie" />
            </div>
            <div class="col" v-for="(tvShow, tvShowIndex) in store.tvShowsArray" :key="tvShowIndex">
                <AppMovieCard :element="tvShow" />
            </div>
        </div>
</template>

<style lang="scss" scoped>
 @use "../style/partials/variables.scss" as *;
.row{
    height: calc(100% - $header-high);
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1em;

        .col{
            width: calc(100% / 5 - 4em);
            height: calc(550px - 4em);
            margin-bottom: 1em;
        }
}

</style>