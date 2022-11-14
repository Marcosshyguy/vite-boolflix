import {reactive} from 'vue';

export const store = reactive({
    movieApi : "https://api.themoviedb.org/3/search/movie",
    apiKey : "api_key=7e1f56d2ef367d1a473c28d6c3add2f9&query=fossa",
    moviesArray : [],
    searchResult : ""
})

