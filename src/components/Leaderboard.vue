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
              <th>Total Time</th>
            </tr>
          </thead>
        <tr v-for="user in topTen">
          <td>{{ user.rank }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.totalDur }}</td>
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
            totalDur: 10000
          },
          {
            rank: 2,
            name: "Steve",
            totalDur: 9700
          },
          {
            rank: 3,
            name: "Isaac",
            totalDur: 10000
          },
          {
            rank: 4,
            name: "Steve",
            totalDur: 9700
          },
          {
            rank: 5,
            name: "Isaac",
            totalDur: 10000
          },
          {
            rank: 6,
            name: "Steve",
            totalDur: 9700
          },
          {
            rank: 7,
            name: "Isaac",
            totalDur: 10000
          },
          {
            rank: 8,
            name: "Steve",
            totalDur: 9700
          },
          {
            rank: 9,
            name: "Steve",
            totalDur: 9700
          },
          {
            rank: 10,
            name: "Steve",
            totalDur: 9700
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
