<template>
  <div id="app">
    <main-nav />
    <router-view />
  </div>
</template>

<script>
import MainNav from './components/MainNav.vue'
// add something to tell if there is a user signed in
// in order to hide/show sign out button
export default {
  name: 'app',
  components: {
    'main-nav': MainNav
  }
}
</script>

<style>
#app {
  background: silver;
  min-height: 100vh;
}

.navbar {
  background: #555;
}

.navbar-brand {
  align-items: center;
}

.navbar-brand img {
  margin-right: 12px;
}

.navbar-item {
  color: whitesmoke;
  padding-top: 2px;
  padding-bottom: 2px;
}

.navbar-item img {
  max-height: 100px;
}

.navbar-link {
  color: whitesmoke;
}

li a {
  background: whitesmoke;
}

.tabs.is-toggle a {
  border-color: #333;
  background: grey;
}

.tabs.is-toggle li:last-child a,
.tabs.is-toggle li:first-child a {
  border-radius: 0;
}

.tabs.is-toggle a {
  border-radius: 0;
}

.tabs.is-toggle li.is-active a {
  border-color: #333;
  background-color: #444;
  border-radius: 0;
}

.tabs.is-toggle a:hover {
  border-color: #333;
  background: #444;
  color: white;
}

</style>
