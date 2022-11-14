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
      axios.get(`${this.store.movieApi}?${this.store.apiKey}`)
      .then((resp) => this.store.moviesArray = resp.data.results);
      console.log(this.store.moviesArray)
    }

  },
  created (){
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
