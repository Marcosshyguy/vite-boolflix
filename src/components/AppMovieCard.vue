<script>
import {store} from "../store"

export default{
  data(){
    return{
      store
    }
  },
  methods:{
    // calcNumba(decimal){

    // }
  },
  props: {
    // title : String,
    // original_title : String,
    // overview :String,
    // vote_average: Number,
    // original_language: String,
    // name: String,
    // original_name: String,
    // poster_path: String
    element : Object
  }
}
</script>

<template>
    <div class="card">
        <div>
            <img :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" :alt="element.original_title" v-if="element.poster_path">
            <p v-else>Immagine non trovata</p>
        </div>
        <p><strong>Lingua originale: </strong>
            <span v-if="element.original_language === 'en'">Bye Bye</span>
            <span v-else>kawai</span>
        </p>
        <p><strong>Titolo: </strong>{{element.title}}{{element.name}}</p>
        <p><strong>Titolo originale: </strong>{{element.original_title}}{{element.original_name}}</p>
        <p><strong>Trama: </strong>{{element.overview}}</p>
        <p><strong>Voto: </strong>{{element.vote_average}}</p>
        <span>Rating 
            <!-- fast way -->
            <span v-for="fullStar in (Math.floor(element.vote_average / 2))"><i class="fa-solid fa-star"></i></span>
            <span v-for="emptyStar in (5 - (Math.floor(element.vote_average / 2)))"><i class="fa-regular fa-star"></i></span>
            <!-- slow way -->
            <!-- <span v-if="element.vote_average > 0 && element.vote_average <= 2" >
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
            <span v-else-if="element.vote_average > 2 && element.vote_average <= 4">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
            <span v-else-if="element.vote_average > 4 && element.vote_average <= 6">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
            <span v-else-if="element.vote_average > 6 && element.vote_average <= 8">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </span>
            <span v-else-if="element.vote_average > 8 && element.vote_average <= 10">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            <span v-else>Non Pervenuto</span> -->
        </span>
    </div>
</template>

<style lang="scss" scoped>
.card{
    width:100%;
}

</style>