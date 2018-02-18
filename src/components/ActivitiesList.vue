<template>
  <div class="activities-container columns">
    <!-- Individual Activity Card Components -->
    <activity-list-item :activities="activities"></activity-list-item>
  </div>
</template>

<script>
import ActivitiesListItem from './ActivitiesListItem'

export default {
  props: ['activities'],
  components: {
    'activity-list-item': ActivitiesListItem
  }
}
</script>

<style></style>
