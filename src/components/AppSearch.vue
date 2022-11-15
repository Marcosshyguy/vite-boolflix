<script>
import {store} from "../store"

export default{
  data(){
    return{
      store
    }
  },
  methods:{
    
  }
}
</script>

<template>
<header>
  <h1>Boolflix</h1>
  <div class="form-container" v-if="store.hideSearchBar">
      <input type="text" id="searchMovies" @keyup.enter="$emit('search')" v-model="this.store.searchResult">
      <button @click="$emit('search')">Cerca</button>
  </div>
  <label for="searchMovies" >
    <i class="fa-solid fa-magnifying-glass" @click="store.hideSearchBar = !store.hideSearchBar"></i>
  </label>
  
</header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables.scss" as *;

header{
  width: calc(100% - 2em);
  height: calc($header-high - 2em);
  padding: 1em;
  background-color: $header-bg;
  
  position: sticky;
  left: 0;
  top: 0;
  z-index: 9;

  display: flex;
  justify-content: space-between;
  align-items: center;

    h1{
      color: red;
    }
    .form-container{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    i{
      color: grey;
      cursor: pointer;

    }
}

</style>