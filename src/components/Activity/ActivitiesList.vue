<template>
  <div class="activities-container columns">
    <!-- Individual Activity Card Components -->
  <activity-list-item v-for="activity in activities"
                      :activity="activity"
                      :key="activity.id"></activity-list-item>
  </div>
</template>

<script>
import ActivityListItem from './ActivityListItem'

export default {
  props: ['activities'],
  components: {
    'activity-list-item': ActivityListItem
  }
}
</script>

<style></style>
