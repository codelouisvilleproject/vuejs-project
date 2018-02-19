<template>


  <div class="profile-page-wrapper">

    <!-- TODO -->

    <div class="profile-container columns is-multiline">

      <div class="column profile is-centered is-full" v-for="user in currentUser">

        <div class="card">

          <header class="card-header">
            <h2 class="card-header-title">
            Profile Overview
            </h2>
            </a>
          </header>


          <div class="card-content">
            <div class="content columns">
              <div class="column is-four-fifths">
                <h2>{{user.fName}} {{user.lName}}</h2>
                <h4>{{user.email}}</h4>
                <h4>{{user.bio}}</h4>
                <h4>{{user.weight}}</h4>
                <h4>{{user.birthDay}}</h4>
                <h4>{{user.address1}}</h4>
                <h4>{{user.address2}}</h4>
                <h4>{{user.city}} {{user.state}} {{user.zip}}</h4>
              </div>
              <img class="userImg column" :src="user.img">
            </div>
          </div>
        </div>
      </div>

      <div class="column profileActivities">
        <div class="columns is-multiline">
          <div class="column is-half profileActivity" v-for="activity in activities">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h2>{{activity.name}}</h2>
                  <h4>{{activity.type}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


</template>






<script>
  export default {
    name: 'profile',

    data: function() {
      return {

        currentUser: [
          {
              fName: 'Isaac',
              lName:  'Cheatham',
              email:  'myEmail@gmail.com',
              img: require('../assets/gravatar.jpg'),
              weight: '180',
              bio: 'Tongue bresaola alcatra corned beef, brisket beef kielbasa strip steak venison tri-tip tail cow. Doner kevin alcatra,'+
              'porchetta turducken ham hock biltong andouille shank. Chuck turkey jerky brisket, shank leberkas picanha jowl. Kevin strip steak meatloaf' +
              'meatball turducken landjaeger alcatra turkey t-bone shankle ball tip drumstick.',
              birthDay: '01/01/1990',
              address1: '1234 Main Street',
              address2: '',
              city: 'Louisville',
              state: 'KY',
              zip: '40213'
          }
        ],

        activities: [
          {
            name: 'Some 5k',
            type: 'cardio',
            duration: 45,
            date: Date.now()
          },

          {
            name: 'Bike Ride',
            type: 'cardio',
            duration: 45,
            date: Date.now()
          },
          {
            name: 'Some 5k',
            type: 'cardio',
            duration: 45,
            date: Date.now()
          },

          {
            name: 'Bike Ride',
            type: 'cardio',
            duration: 45,
            date: Date.now()
          }
        ]

      }
    },

    methods: {
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
