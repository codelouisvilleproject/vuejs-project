<template>
  <div class="modal"
       :class="{ 'is-active': isModalActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Edit Profile</p>
        <button class="delete"
                aria-label="close"
                @click="toggleModalState"></button>
      </header>
      <section class="modal-card-body">

        <div class="field is-horizontal">
          <div class="field-body">
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input class="input"
                   type="text"
                   placeholder="Daily run"
                   v-model="editUser.firstName"/>
          </div>
        </div>

        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input class="input"
                   type="text"
                   placeholder="Daily run"
                   v-model="editUser.lastName"/>
          </div>
        </div>
      </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-body">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input"
                   type="text"
                   placeholder="Daily run"
                   v-model="editUser.email"/>
          </div>
        </div>

        <div class="field">
          <label class="label">Weight</label>
          <div class="control">
            <input class="input"
                   type="number"
                   v-model="editUser.weight"/>
          </div>
        </div>
      </div>
    </div>

        <div class="field">
          <label class="label">Bio</label>
          <div class="control">
            <textarea class="textarea"
                    rows="5"
                   v-model="editUser.bio"></textarea>
          </div>
        </div>

      </section>
      <footer class="modal-card-foot">
        <button class="button is-success"
                @click="toggleModalState">Submit Activity</button>
        <button class="button"
                @click="toggleModalState">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'isModalActive',
    'toggleModalState',
    'editUser'
  ],
}

</script>

<style>

</style>
