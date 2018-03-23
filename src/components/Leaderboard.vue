<template>


  <div class="leaderboard-page-wrapper">

    <!-- TODO -->



    <div class="leaderboard-container columns is-multiline">

      <div class="column is-centered is-full">
        <table class="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Activity Count</th>
              <th>Total Time</th>
            </tr>
          </thead>
        <tr v-for="user in topTen">
          <td class="has-text-centered">{{ user.rank }}</td>
          <td>{{ user.name }}</td>
          <td class="has-text-centered">{{ user.activityCount }}</td>
          <td>{{ user.metric }}</td>
        </tr>
        </table>
      </div>

    </div>

  </div>

</template>






<script>
import { default as fit } from '../fitClient';


  export default {
    name: 'leaderboard',
    data: function() {
      return {

        topTen:
        [
          {
            rank: 1,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
          {
            rank: 2,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
          {
            rank: 3,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
          {
            rank: 4,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
          {
            rank: 5,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
          {
            rank: 6,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
          {
            rank: 7,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
          {
            rank: 8,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
          {
            rank: 9,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
          {
            rank: 10,
            name: "Isaac",
            metric: 10000,
            userId: 0,
            activityCount: 5
          },
        ]
      }
    },

    mounted() {
        fit.getUserProfileInfo(1234)
          .then(res => {this.currentUser = res})
      },
    methods: {

    }
  }

</script>





<style>
.leaderboard-page-wrapper {
  display: flex;
  flex-direction: column;
}

.leaderboard-container {
  /* margin: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}


</style>
