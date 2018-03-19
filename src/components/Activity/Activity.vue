<template>
  <div class="activity-page-wrapper">
    <h1 class="title">welcome {{ this.$route.params.userName }}</h1>
    <button class="add-activity button"
            @click="this.toggleModalState">Add Activity</button>

    <activity-modal :isModalActive="this.isModalActive"
                    :newActivity="this.newActivity"
                    :toggleModalState="this.toggleModalState"
                    :logNewActivity="this.logNewActivity"></activity-modal>

    <activities-list :activities="this.activities"
                     :deleteActivity="this.deleteActivity"></activities-list>
    <button @click="this.getActivities">dum butn</button>
  </div>
</template>

<script>
  import { default as fit } from '../../fitClient';
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
        this.activities.unshift({
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
      },
      deleteActivity: function(id) {
        // TODO
        // DELETE to db
        // Add nice looking prompt to check if user is sure they want to delete
        let newList = this.activities.filter((activity) => id !== activity.id)
        this.activities = newList
      },
      saveActivity: function(activity) {
        // TODO
        // PUT to db with changes
        axios.post('');
      },
      getActivities: function() {
        fit.getActivityTypes()
          .then(res => console.log(res))
        fit.getUserProfileInfo(123)
          .then(res => console.log(res))
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
            type: 'Cardio',
            duration: 45,
            date: Date.now(),
            id: 0
          },
          {
            name: 'Daily run',
            type: 'Cardio',
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
