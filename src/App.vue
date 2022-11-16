<script>
import {store} from "./store";
import axios from "axios";
import AppSearch from "./components/AppSearch.vue";
import AppMovieGrid from "./components/AppMovieGrid.vue"
export default{
  data(){
    return{
      store
    }
  },
  components :{
    AppSearch,
    AppMovieGrid
  },
  methods:{
    getMovie(){
      this.store.moviesArray = []
      this.store.tvShowsArray = []
      this.store.hideSearchBar = false;
      let params = {};
      params.api_key = this.store.apiKey;
      if(this.store.searchResult){
        params.query = this.store.searchResult
      }
      // movies
      axios.get(this.store.movieApi, {params : params})
      .then((resp) => this.store.moviesArray = resp.data.results);
      console.log("film",this.store.moviesArray)
      // tv shows
      axios.get(this.store.tvShowsApi, {params : params})
      .then((resp) => this.store.tvShowsArray = resp.data.results);
      console.log("tvshow",this.store.tvShowsArray)

      this.store.searchResult = ''
    }
  },
  created (){
    this.getMovie();
  }
}
</script>

<template>
  <div class="main-container">
    <AppSearch @search="getMovie" />
    <AppMovieGrid />
  </div>

</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
