<template>


  <div class="profile-page-wrapper">

    <!-- TODO -->



    <div class="profile-container columns is-multiline">

      <div class="column profile is-centered is-full">

        <div class="card">

          <header class="card-header">
            <h2 class="card-header-title">
            Profile Overview
            </h2>
            </a>
            <button class="add-activity button"
                    @click="this.toggleModalState">Edit Profile</button>
          </header>


          <div class="card-content">
            <div class="content columns">
              <div class="column is-four-fifths">
                <h2>{{currentUser.firstName}} {{currentUser.lastName}}</h2>
                <h4>{{currentUser.email}}</h4>
                <h4>{{currentUser.bio}}</h4>
                <h4>{{currentUser.weight}}</h4>
                <h4>{{currentUser.birthDay}}/{{currentUser.birthYear}}/{{currentUser.birthMonth}}</h4>
                <h4>{{currentUser.address1}}</h4>
                <h4>{{currentUser.address2}}</h4>
                <h4>{{currentUser.city}} {{currentUser.state}} {{currentUser.zip}}</h4>
              </div>
              <img class="userImg column" :src="require('../../assets/gravatar.jpg')">
            </div>
          </div>
        </div>
      </div>

    </div>

    <edit-modal :isModalActive="this.isModalActive"
                :toggleModalState="this.toggleModalState"
                :editUser="this.currentUser"
                :editUserForm="this.editUserForm">
    </edit-modal>
  </div>

</template>






<script>
import { default as fit } from '../../fitClient';
import EditModal from './EditModal';

  export default {
    name: 'profile',
    components: {
      'edit-modal': EditModal
    },
    data: function() {
      return {
        isModalActive: false,

        currentUser:
          {

          }

      }
    },

    mounted() {
        fit.getUserProfileInfo()
          .then(res => {this.currentUser = res; console.log(res)})
      }
      // toggleModalState: function() {
      //   this.isModalActive = !this.isModalActive;
      // },
      // logNewActivity: function() {
      //   if (this.newActivity.name === ''||
      //       this.newActivity.start === '' ||
      //       this.newActivity.end === '') {
      //     return
      //   }
      //   this.activities.push({
      //     name: this.newActivity.name,
      //     type: this.newActivity.type,
      //     duration: this.newActivity.duration
      //   });
      //   this.newActivity.name = '';
      //   this.newActivity.selectedType = 'Cardio';
      //   this.newActivity.duration = '';
      //   this.toggleModalState();
      // }
    ,
    methods: {
      toggleModalState: function() {
        this.isModalActive = !this.isModalActive;
      },
      editUserForm: function(newInfo) {
        fit.putUserProfile(newInfo)
        .then((res) => console.log(res.message))
      },
      // logItems: function() {
      //   console.log(typeof this.currentUser);
      // }
    }
  }

</script>





<style>
/* .profile-page-wrapper {
  display: flex;
  flex-direction: column;
} */

.profile-container {
  /* margin: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}

/* .profile {
  min-width: 277px;
  max-width: 100;
} */

.userImg {
  width: 100%;
  height: 100%;
}

/* .card-header-title {
  display: flex;
  align-items: center;
  justify-content: center;
} */

.profileActivities {
  margin-left: 0;
  margin-right: 0;
}

.is-four-fifths {
  padding-right: 50px;
}


/* .profileActivity {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
} */

/* .profileActivity .card-content {
  margin: 13px;
  padding: 0;
} */

</style>
