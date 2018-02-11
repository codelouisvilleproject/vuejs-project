<template>
  <div class="sign-up-form">
    <h1 class="title">Sign In!</h1>

    <div class="field">
      <label class="label">User name</label>
      <div class="control">
        <div class="control has-icons-left has-icons-right">
        <input class="input is-success"
               type="text"
               placeholder="Frank_Iero" />
        <p class="help is-success">This username is available</p>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input"
               type="password"
               placeholder="password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger">Password is not valid.</p>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <router-link class="button is-link"
                     tag="button"
                     :to="{ name: 'activity',
                            params: {
                              userName: 'User'
                            }
                          }">Sign In!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'signIn'
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
