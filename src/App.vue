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
      let params = {}
      params.api_key = this.store.apiKey;
      params.query = this.store.apiQuery;
      if(this.store.searchResult){
        params.title = this.store.searchResult
      }

      axios.get(this.store.movieApi, {params : params})
      .then((resp) => this.store.moviesArray = resp.data.results);
      console.log(this.store.moviesArray)
    }

  },
  created (){
    this.getMovie();
  }
}
</script>

<template>
 <AppSearch @search="getMovie" />
 <AppMovieGrid />
</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
