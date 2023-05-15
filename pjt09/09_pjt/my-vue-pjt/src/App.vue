<template>
  <div id="app">
    <nav>
      
      <b-nav class="nav justify-content-end">
        <b-nav-item to="/movies">Movie</b-nav-item>
        <b-nav-item to="/random">Random</b-nav-item>
        <b-nav-item to="/watch-list">WatchList</b-nav-item>
      </b-nav>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
