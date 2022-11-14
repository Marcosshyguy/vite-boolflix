<script>
import {store} from "../store"

export default{
  data(){
    return{
      store
    }
  },
  methods:{

  },
  props: {
    title : String,
    original_title : String,
    overview :String,
    vote_average: String
  }
}
</script>

<template>
    <div class="card">
        <p><strong>Titolo: {{title}}</strong></p>
        <p><strong>Titolo originale: {{original_title}}</strong></p>
        <p><strong>Trama: {{overview}}</strong></p>
        <p><strong>Voto: {{vote_average}}</strong></p>
    </div>
</template>

<style lang="scss" scoped>
.card{
    width:100%;
}

</style>