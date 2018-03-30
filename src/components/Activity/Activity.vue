<template>
  <div class="activity-page-wrapper">
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
  import { default as fit } from '@/fitClient';
  import auth from '@/auth';
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
        fit.postUserActivity({
          name: this.newActivity.name,
          type: this.newActivity.type,
          durationMilliseconds: this.newActivity.duration * 60000,
          id: this.currentId
        })
          .then(() => fit.getUserActivities())

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
        fit.getUserInfo()
        // fit.postUserActivity({
        //   id: 1,
        //   userId: 7,
        //   activityTypeId: 3,
        //   durationMilliseconds: 10
        // })
      }
    },
    mounted() {
      fit.getActivityTypes()
        .then(res => {
          this.avtivityTypes = res;
        })
      fit.getUserActivities()
        .then(res => {
          this.activities = res.data
          console.log(res.data)
          console.log(this.activities)
        })
    },
    data: function() {
      return {
        currentId: 3,
        isModalActive: false,
        // list of all activities
        newActivity: {
          name: '',
          type: 'Cardio',
          durationMilliseconds: '',
          date: Date.now()
        },
        activityTypes:[],
        activities: [
          {
            name: 'Some 5k',
            type: 'Cardio',
            duration: 45,
            date: Date.now(),
            id: 0
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
