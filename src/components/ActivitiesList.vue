<template>
  <div class="activities-container columns">
    <!-- Individual Activity Card Components -->
    <div class="column activity"
         v-for="activity in activities">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ activity.name }}
          </p>
          <!-- <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a> -->
        </header>
        <div class="card-content">
          <div class="content">
            <a href="#">#{{ activity.type }}</a>
            <br>
            <time>{{ activity.duration }} minutes</time>
          </div>
        </div>
        <!-- <footer class="card-footer">
          <a href="#" class="card-footer-item">Save</a>
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['activities']
}
</script>

<style></style>
