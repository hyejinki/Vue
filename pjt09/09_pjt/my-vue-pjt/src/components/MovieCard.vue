<template>
  <div>
    <b-card :title="movie.title" :img-src="MOVIE_IMG_URL" img-alt="Card image" img-top>
        <b-card-text>
          {{ movie.overview }}
        </b-card-text>
      </b-card>
  </div>

</template>
<script>

export default {
  name: 'MovieCard',
  props : {
    movie: Object
  },
  data() {
    return {
      IMG_URL: 'https://image.tmdb.org/t/p/original/',
    }
  },
  computed: {
    MOVIE_IMG_URL() {
      return this.IMG_URL + this.movie.poster_path
    }
  }
}
</script>

<style>


</style>