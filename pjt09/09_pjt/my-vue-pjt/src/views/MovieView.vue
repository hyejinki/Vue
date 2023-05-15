<template>
  <div>
    <div class="container">
      <div class="row row-cols-4">
        <div class="col-md-3"  v-for="movie in movies" :key="movie.id">
          <MovieCard :movie="movie"/>
        </div>


      </div>

    </div>
  </div>

  
</template>


<script>
import axios from 'axios'
import MovieCard from '@/components/MovieCard.vue'


export default {
  name: 'MovieView',
  components: {
    MovieCard
  }
  ,data() {
    return {
      movies: []
    }
  }, 
  created() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9258b677d07ed2dfd26421abf5222024&language=ko-KR')
    .then((res) => {
      this.movies = res.data.results
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }
  
}
</script>

<style>

</style>