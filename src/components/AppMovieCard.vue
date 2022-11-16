<script>
import {store} from "../store"

export default{
  data(){
    return{
      store
    //   this array collect all the lenguages to check when we put flags
    //   [it,en]
    }
  },
  methods:{
    getImgPathJpg(img) {
            return new URL(`../assets/images/${img}.jpg`, import.meta.url).href;
        }
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
    
    // in this case the best way is to use the object which we are referring to and set the keys
    element : Object
  }
}
</script>

<template>
    <div class="card-container">

        <div class="card">
            <div class="card-image">
                    <img :src="`https://image.tmdb.org/t/p/w342${element.poster_path}`" :alt="element.original_title" v-if="element.poster_path">
                    <img src="../assets/images/image-not-found.jpeg" alt="Image Not Found" v-else>
            </div>
            <div class="card-infos">
                <div>
                    <!-- one way to add images the other one is to collect all the lenguages inside an array and chec if they are insede of it but the issue is to check the file type -->
                    <!-- <img v-if="availableFlags.includes(item.original_language)"
                        :src="getImgUrl(`${item.original_language}.png`)"> -->
                    <span><strong>Lingua originale: </strong>
                        <span v-if="element.original_language === 'en'"><img :src="getImgPathJpg(element.original_language)" alt=""></span>
                        <span v-else-if="element.original_language === 'it'"><img :src="getImgPathJpg(element.original_language)" alt=""></span>
                        <span v-else> {{element.original_language}}</span> 
                    </span>

                </div>
                <p><strong>Titolo: </strong>{{element.title}}{{element.name}}</p>
                <p><strong>Titolo originale: </strong>{{element.original_title}}{{element.original_name}}</p>
                <p><strong>Trama: </strong>{{element.overview}}</p>
                <p><strong>Voto: </strong>{{Math.ceil(element.vote_average / 2)}}</p>
                <span>Rating 
                    <!-- cicle the star rating according to the vote_avarage -->
                    <!-- fast way -->
                    <span v-for="fullStar in (Math.ceil(element.vote_average / 2))">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="emptyStar in (5 - (Math.ceil(element.vote_average / 2)))">
                        <i class="fa-regular fa-star"></i>
                    </span>
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
        </div>
    </div>

</template>

<style lang="scss" scoped>
.card-container{
    height: 100%;
    width: 100%;
    perspective: 1000px;
    .card{
        height: 100%;
        width:100%;
        padding: 1em;
        position: relative;
        transition: all 1s;
        transform-style: preserve-3d;
        
        
            .card-image{
                height: 100%;
                width: 100%;
                position: absolute; 
                top: 0;
                left: 0;
                z-index: 2;
                backface-visibility: hidden;

                        
                    img{
                    object-fit: cover;
                    height: 100%;
                    
                    }
                    
            }

            .card-infos{
                height: 100%;
                width: 100%;
                position: absolute; 
                top: 0;
                left: 0;
                z-index: 1;
                color: white;
                text-align: center;
                transform: rotateX(180deg);
                overflow-x: auto;

                & > *{
                    margin-bottom: .5rem;
                }

                img{
                    width: 5%;
                }

                .fa-solid{
                    color: yellow;
                }
            }

            
    }
    &:hover .card{
            transform: rotateX(180deg);
        }
}



</style>