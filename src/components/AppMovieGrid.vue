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
                <AppMovieCard :element="movie" />
            </div>
            <div class="col" v-for="(tvShow, tvShowIndex) in store.tvShowsArray" :key="tvShowIndex">
                <AppMovieCard :element="tvShow" />
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