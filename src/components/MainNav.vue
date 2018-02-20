<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/FitTogetherLogo.png" width="75" height="75">
      </a>
      <button class="button navbar-burger"
              @click="toggleHamburgerMenu()">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <div class="navbar-menu"
         :class="{ 'is-active': isHamburgerActive }">
      <div class="navbar-end">
        <a class="navbar-item">&lt;Code Louisville&gt;</a>
        <a class="navbar-item">Sign Out</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  data: function() {
    return {
      isHamburgerActive: false
    }
  },
  methods: {
    toggleHamburgerMenu: function() {
      return this.isHamburgerActive = !this.isHamburgerActive
    },
  }
}
</script>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu.is-active {
    background: #333;
  }
}
.navbar-menu {
  background: #555;
  color: whitesmoke;
  text-align: center;
}
.navbar-item:hover {
  background: whitesmoke;
  color: #333;
}
.navbar-burger {
  margin-right: 16px;
  background: #444;
  color:#fff;
  border: 1px solid silver;
}
</style>
