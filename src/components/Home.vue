<template>
  <div>
    <div class="tabs is-toggle is-fullwidth">
      <ul>
        <li :class="{ 'is-active': isPath('activity') }"
            @click="goToRoute(0)">
          <a>
            <span class="icon is-small"><i class="fas fa-rocket"></i></span>
            <span>Avtivity</span>
          </a>
        </li>
        <li :class="{ 'is-active': isPath('profile') }"
            @click="goToRoute(1)">
          <a>
            <span class="icon is-small"><i class="fas fa-user"></i></span>
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {

    }
  },
  methods: {
    isPath: function(path) {
      return this.$route.name === path
    },
    goToRoute: function(index) {
      const home = (index ===2);
      const activity = (index === 0);
      const profile = (index === 1);

      if (activity) {
        this.$router.push('activity');
      } else if (profile) {
        this.$router.push('profile');
      }
    }
  }
}
</script>

<style scoped>

</style>
