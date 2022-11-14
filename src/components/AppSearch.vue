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
<div class="main-container">
    <div class="form-container">
        <input type="text" id="searchMovies" v-model="this.store.searchResult">
        <label for="searchMovies" ></label>
        <button>Cerca</button>
    </div>
</div>
</template>

<style lang="scss" scoped>



</style>