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
    return axios.get(`${this.apiBaseUrl}/users/${uid}`)
      .then(res => res.data)
  }

  getUserActivities() {
    return axios.get(`${this.apiBaseUrl}`)
      .then(res => res.data)
  }
}

export default new FitClient();
