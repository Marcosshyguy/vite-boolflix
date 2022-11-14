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
    vote_average: Number,
    original_language: String
  }
}
</script>

<template>
    <div class="card">
        <p><strong>Lingua originale: </strong>
            <span v-if="original_language === 'en'">Bye Bye</span>
            <span v-else>kawai</span>

        </p>
        <p><strong>Titolo: </strong>{{title}}</p>
        <p><strong>Titolo originale: </strong>{{original_title}}</p>
        <p><strong>Trama: </strong>{{overview}}</p>
        <p><strong>Voto: </strong>{{vote_average}}</p>
        <span>Rating 
            <span v-if="vote_average > 0 && vote_average <= 2" >
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
            <span v-else-if="vote_average > 2 && vote_average <= 4">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
            <span v-else-if="vote_average > 4 && vote_average <= 6">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
            <span v-else-if="vote_average > 6 && vote_average <= 8">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
            <span v-else-if="vote_average > 8 && vote_average <= 10">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-else>Non Pervenuto</span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
.card{
    width:100%;
}

</style>