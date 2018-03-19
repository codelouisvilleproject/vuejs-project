<template>
  <div class="modal"
       :class="{ 'is-active': isModalActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Sign Up!</p>
        <button class="delete"
                aria-label="close"
                @click="toggleModalState"></button>
      </header>
      <section class="modal-card-body">

        <div class="field">
          <label class="label">User name</label>
          <div class="control">
            <div class="control has-icons-left has-icons-right">
            <input class="input"
                   type="text"
                   placeholder="Gene_Defcon"
                   v-model="signUpForm.username" />
            <!-- if user name is valid show the p below -->
            <!-- <p class="help is-success">This username is available</p> -->
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <!-- <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span> -->
          </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input"
                   type="password"
                   placeholder="password"
                   v-model="signUpForm.password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
            <!-- <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span> -->
          </div>
          <!-- if password not valid show p below -->
          <!-- <p class="help is-danger">Password is not valid.</p> -->
        </div>

      </section>
      <footer class="modal-card-foot">
        <button class="button is-success"
                @click="">Create Account</button>
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
    'signUpForm'
  ],
  data: function() {
    return {

    }
  }
}

</script>

<style>

</style>
