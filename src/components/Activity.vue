<template>
  <div class="activity-page-wrapper">
    <!-- add activity modal should go here -->
    <button class="add-activity button"
            @click="this.toggleModalState">Add Activity</button>
    <!-- Add Props -->
    <activity-modal :isModalActive="this.isModalActive"
                    :newActivity="this.newActivity"
                    :toggleModalState="this.toggleModalState"
                    :logNewActivity="this.logNewActivity"></activity-modal>
    <!-- TODO -->
    <!-- Activities List Component -->
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
  </div>
</template>

<script>
  import ActivityModal from './ActivityModal';

  export default {
    name: 'activity',
    components: {
      'activity-modal': ActivityModal
    },
    methods: {
      toggleModalState: function() {
        this.isModalActive = !this.isModalActive;
      },
      logNewActivity: function() {
        if (this.newActivity.name === '' ||
            this.newActivity.start === '' ||
            this.newActivity.end === '') {
          return
        }
        this.activities.push({
          name: this.newActivity.name,
          type: this.newActivity.type,
          duration: this.newActivity.duration
        });
        this.newActivity.name = '';
        this.newActivity.selectedType = 'Cardio';
        this.newActivity.duration = '';
        this.toggleModalState();
      }
    },
    data: function() {
      return {
        isModalActive: false,
        // list of all activities
        newActivity: {
          name: '',
          type: 'Cardio',
          duration: '',
          date: Date.now()
        },
        activities: [
          {
            name: 'Some 5k',
            type: 'cardio',
            duration: 45,
            date: Date.now()
          }
        ]
        // TODO:
        // fetch from db when component mounts
      }
    }
  }
</script>

<style>
.activity-page-wrapper {
  display: flex;
  flex-direction: column;
}

.add-activity {
  min-width: 100px;
  margin: auto;
}

.activities-container {
  margin: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.activity {
  min-width: 277px;
}
</style>
