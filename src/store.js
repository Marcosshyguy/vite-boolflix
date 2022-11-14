import {reactive} from 'vue';

export const store = reactive({
    movieApi : "https://api.themoviedb.org/3/search/movie",
    tvShowsApi: "https://api.themoviedb.org/3/search/tv",
    apiKey : "7e1f56d2ef367d1a473c28d6c3add2f9",
    moviesArray : [],
    tvShowsArray :[],
    searchResult : ""
})

