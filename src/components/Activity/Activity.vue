<template>
  <div class="activity-page-wrapper">
    <button class="add-activity button"
            @click="this.toggleModalState">Add Activity</button>

    <activity-modal :isModalActive="this.isModalActive"
                    :newActivity="this.newActivity"
                    :toggleModalState="this.toggleModalState"
                    :logNewActivity="this.logNewActivity"></activity-modal>

    <activities-list :activities="this.activities"></activities-list>
  </div>
</template>

<script>
  import ActivityModal from './ActivityModal';
  import ActivitiesList from './ActivitiesList';

  export default {
    name: 'activity',
    components: {
      'activity-modal': ActivityModal,
      'activities-list': ActivitiesList
    },
    methods: {
      toggleModalState: function() {
        this.isModalActive = !this.isModalActive;
      },
      resetNewActivityForm: function() {
        this.newActivity.name = '';
        this.newActivity.selectedType = 'Cardio';
        this.newActivity.duration = '';
      },
      logNewActivity: function() {
        if (this.newActivity.name === '' ||
            this.newActivity.duration === '') {
          return
        }
        this.activities.push({
          name: this.newActivity.name,
          type: this.newActivity.type,
          duration: this.newActivity.duration,
          id: this.currentId
        });
        this.currentId ++
        this.resetNewActivityForm();
        this.toggleModalState();
        // TODO
        // POST to db
      }
    },
    data: function() {
      return {
        currentId: 3,
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
            date: Date.now(),
            id: 0
          },
          {
            name: 'Daily run',
            type: 'cardio',
            duration: 30,
            date: Date.now(),
            id: 1
          },
          {
            name: 'Leg day',
            type: 'Weight Lifting',
            duration: 120,
            date: Date.now(),
            id: 2
          }
        ]
      }
      // TODO:
      // fetch from db when component mounted
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
