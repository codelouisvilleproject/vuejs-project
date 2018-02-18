<template>
  <div class="modal"
       :class="{ 'is-active': isModalActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add Activity</p>
        <button class="delete"
                aria-label="close"
                @click="toggleModalState"></button>
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
                @click="toggleModalState">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'newActivity',
    'isModalActive',
    'toggleModalState',
    'logNewActivity'
  ],
}

</script>

<style>

</style>
