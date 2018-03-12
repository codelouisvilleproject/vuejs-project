<template>
  <div class="sign-up-form">
    <h1 class="title">Sign In!</h1>
    <div class="field">
      <label class="label">User name</label>
      <div class="control">
        <div class="control has-icons-left has-icons-right">
        <input class="input"
               type="text"
               placeholder="Gene_Defcon"
               v-model="username" />
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
               v-model="password" />
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

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link"
                tag="button"
                @click="signIn">Sign In!</button>
      </div>
    </div>
    <a href="">Not a member yet? Sign up now!</a>
  </div>
</template>

<script>
  export default {
    name: 'signIn',
    data: function () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      signIn: function() {
        // make req to server to create new account
        // then suggest sign in
        if (!this.username || !this.password) return

        this.$router.push({
          name: 'activity',
          params: {
            userName: this.username
          }
        });
      }
    }
  }
</script>

<style>
.sign-up-form {
  padding-top: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
}
</style>
