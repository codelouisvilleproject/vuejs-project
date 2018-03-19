import axios from 'axios';

class FitClient {
  constructor() {
    this.apiBaseUrl = 'https://2qvihxpp77.execute-api.us-east-2.amazonaws.com/Staging';

  }

  getActivityTypes() {
    return axios.get(`${this.apiBaseUrl}/activitytypes`)
      .then(res => res.data)
  }

  getUserProfileInfo(uid) {
    return axios.get(`${this.apiBaseUrl}/users/${uid}/`)
      .then(res => res.data)
  }

  getUserActivities(uid) {
    return axios.get(`${this.apiBaseUrl}/users/${uid}/`)
      .then(res => res.data)
  }

  postLogIn() {

  }

  postSignUp() {

  }
}

export default new FitClient();
