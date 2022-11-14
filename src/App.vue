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

  },
  created (){
    axios.get(`${this.store.movieApi}?${this.store.apiKey}`)
    .then((resp) => this.store.moviesArray = resp.data);
    console.log(this.store.moviesArray)
  }
}
</script>

<template>
 <AppSearch />
</template>

<style lang="scss">
@use "./style/general.scss" as *;

</style>
