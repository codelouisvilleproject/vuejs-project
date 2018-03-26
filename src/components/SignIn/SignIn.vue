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
               v-model="signInForm.email" />
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
               v-model="signInForm.password" />
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
                @click="signIn(signInForm)">Sign In!</button>
      </div>
    </div>
    <button class="button"
            @click="this.toggleModalState">Not a member yet? Sign up now!</button>
    <sign-up-modal :signUpForm="this.signUpForm"
                   :isModalActive="this.isSignUpModalOpen"
                   :toggleModalState="this.toggleModalState"
                   :signUp="this.signUp"></sign-up-modal>
  </div>
</template>

<script>
  import auth from '@/auth'
  import { default as fit } from '@/fitClient';
  import SignUpModal from './SignUpModal';

  export default {
    name: 'signIn',
    components: {
      'sign-up-modal': SignUpModal
    },
    data: function () {
      return {
        isSignUpModalOpen: false,
        signUpForm: {
          firstName: '',
          lastName: '',
          birthDay: 0,
          birthMonth: 0,
          birthYear: 0,
          email: ''
        },
        signInForm: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      signIn: function(creds) {
        // make req to server to create new account
        // then suggest sign in
        if (!creds.email || !creds.password) return

        fit.postSignIn(creds)
          .then(res => {
            console.log(res)
            if (res.status === 200) {
              auth.signIn(res.data.token, res.data)
              this.$router.push({
                name: 'activity',
                params: {
                  userName: res.data.firstName
                }
              });
            }
          })
      },
      signUp: function(newUser) {
        fit.postSignUp(newUser)
        .then((res) => console.log(res.message))
      },
      toggleModalState: function() {
        this.isSignUpModalOpen = !this.isSignUpModalOpen;
      },
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
