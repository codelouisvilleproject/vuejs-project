<template>
  <div class="activity-page-wrapper">
    <h1 class="title">Activity</h1>
    <!-- add activity modal should go here -->
    <button class="add-activity button"
            @click="this.toggleModalState">Add Activity</button>
    <!-- make modal it's own component -->
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
          <!-- add activity form -->
          <div class="field">
            <label class="label">Activity Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Daily run" />
            </div>
            <p class="help">Optional help txt</p>
          </div>

          <div class="field">
            <label class="label">Activity Type</label>
            <span class="select">
              <!-- could populate this from the db of activity types -->
              <select>
                <option selected>Running</option>
                <option>Swimming</option>
                <option>etc.</option>
              </select>
            </span>
          </div>

          <div class="field">
            <label class="label">From</label>
            <div class="control">
              <input class="input" type="time" />
            </div>
            <label class="label">To</label>
            <div class="control">
              <input class="input" type="time" />
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Submit Activity</button>
          <button class="button"
                  @click="this.toggleModalState">Cancel</button>
        </footer>
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
      }
    },
    data: function() {
      return {
        isModalActive: false
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
</style>
