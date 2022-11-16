import {reactive} from 'vue';

export const store = reactive({
    movieApi : "https://api.themoviedb.org/3/search/movie",
    tvShowsApi: "https://api.themoviedb.org/3/search/tv",
    genreApi:"https://api.themoviedb.org/3/genre/tv/list",
    apiKey : "7e1f56d2ef367d1a473c28d6c3add2f9",
    moviesArray : [],
    tvShowsArray :[],
    filterArray:[],
    genreList:[],
    searchResult : "",
    genreOption:"",
    hideSearchBar:false
})

