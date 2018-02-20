<template>
  <div class="activities-container columns">
    <!-- Individual Activity Card Components -->
  <activity-list-item v-for="activity in activities"
                      :activity="activity"
                      :deleteActivity="deleteActivity"
                      :key="activity.id"></activity-list-item>
  </div>
</template>

<script>
import ActivityListItem from './ActivityListItem'

export default {
  props: ['activities', 'deleteActivity'],
  components: {
    'activity-list-item': ActivityListItem
  }
}
</script>

<style></style>
