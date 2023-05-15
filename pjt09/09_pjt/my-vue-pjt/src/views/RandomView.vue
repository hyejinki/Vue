<template>
  <div>
    <div class="d-flex justify-content-center">
      <div style= "max-width: 400px;">
        <b-button variant="success" style="width: 100%">PICK</b-button>
        <b-card :title="randonMovie.title" :img-src="MOVIE_IMG_URL" 
        img-alt="Card image" img-top >
        </b-card>
      </div>
  </div>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  name: 'RandomView',
  data() {
    return {
      movies : [],
      IMG_URL: 'https://image.tmdb.org/t/p/original/',

    }
  },
  computed: {
    randonMovie() {
 
      return _.sample(this.movies, 1)
    },
    MOVIE_IMG_URL() {
      return this.IMG_URL + this.randonMovie.poster_path
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