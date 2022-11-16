<script>
import {store} from "./store";
import axios from "axios";
import AppSearch from "./components/AppSearch.vue";
import AppMovieGrid from "./components/AppMovieGrid.vue"
import { isArray } from "@vue/shared";
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
    // the best way in this case is to divide by three componente the research
    // i mean one function that manage the data gathered from the search bar and the others two for every single search
    // so getSearchData(), getMovies(), getTvShows
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
      .then((resp) => this.store.moviesArray = resp.data.results)
      console.log(this.store.moviesArray)
      // .catch((error) => {this.store.moviesArray = []});
      // .finally(this.store.moviesArray);
      // tv shows
      axios.get(this.store.tvShowsApi, {params : params})
      .then((resp) => this.store.tvShowsArray = resp.data.results)
      // .catch((error) => {this.store.tvShowsArray = []});
      // .finally(this.store.tvShowsArray);


      this.store.searchResult = ''
    }
    
  },
  created (){
    getGenre:{
      let params = {};
      params.api_key = this.store.apiKey;
      axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=7e1f56d2ef367d1a473c28d6c3add2f9")
      .then((resp) => this.store.genreList = resp.data)
      console.log(this.store.genreList)
    }
  }
}
</script>

<template>
  <button @click="getGenre">fddf</button>
  <div class="main-container">
    <AppSearch @search="getMovie" />
    <AppMovieGrid />
  </div>

</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
