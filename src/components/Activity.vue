<template>
  <div class="activity-page-wrapper">
    <!-- add activity modal should go here -->
    <button class="add-activity button"
            @click="this.toggleModalState">Add Activity</button>
    <!-- TODO -->
    <!-- Make Modal It's Own Component -->
    <div class="modal"
         :class="{ 'is-active': this.isModalActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Activity</p>
          <button class="delete"
                  aria-label="close"
                  @click="this.toggleModalState"></button>
        </header>
        <section class="modal-card-body">

          <!-- Add Activity Form -->
          <div class="field">
            <label class="label">Activity Name</label>
            <div class="control">
              <input class="input"
                     type="text"
                     placeholder="Daily run"
                     v-model="newActivity.name" />
            </div>
            <p class="help">Optional help txt</p>
          </div>

          <div class="field">
            <label class="label">Activity Type</label>
            <span class="select">
              <!-- could populate this from the db of activity types -->
              <select v-model="newActivity.type">
                <option selected>Cardio</option>
                <option>Weight Lifting</option>
                <option>etc.</option>
              </select>
            </span>
          </div>

          <div class="field">
            <label class="label">Total Duration</label>
            <div class="control">
              <input class="input"
                     type="number"
                     v-model="newActivity.duration" />
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success"
                  @click="logNewActivity">Submit Activity</button>
          <button class="button"
                  @click="this.toggleModalState">Cancel</button>
        </footer>
      </div>
    </div>
    <!-- END MODAL -->

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
              <p>DOH!</p>
              <a href="#">@User</a>. <a href="#">#{{ activity.type }}</a>
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
  export default {
    name: 'activity',
    methods: {
      toggleModalState: function() {
        this.isModalActive = !this.isModalActive;
      },
      logNewActivity: function() {
        if (this.newActivity.name === ''||
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
