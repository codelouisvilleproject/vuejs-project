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
        <a v-show="auth.isLoggedIn"
           class="navbar-item"
           @click="logOut()">Sign Out</a>
      </div>
    </div>
  </nav>
</template>

<script>
import auth from '@/auth'
import { default as fit } from '@/fitClient'

export default {
  name: 'MainNav',
  data: function() {
    return {
      isHamburgerActive: false,
      auth: auth
    }
  },
  methods: {
    toggleHamburgerMenu: function() {
      return this.isHamburgerActive = !this.isHamburgerActive
    },
    logOut() {
      fit.postSignOut(auth.token)
        .then(res => {
          auth.signOut()
          this.$router.push({
            path: '/'
          })
          console.log(auth)
        })
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

.navbar-brand:hover, .navbar-item:hover {
  background: grey;
  color: #333;
}

.navbar-brand img {
  height: 85px;
  width: auto;
}


.navbar-burger {
  margin-right: 16px;
  background: #444;
  color:#fff;
  border: 1px solid silver;
}
</style>
