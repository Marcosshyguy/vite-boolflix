<script>
import {store} from "./store";
import axios from "axios";
import AppSearch from "./components/AppSearch.vue";
export default{
  data(){
    return{
      store
    }
  },
  components :{
    AppSearch
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
</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
