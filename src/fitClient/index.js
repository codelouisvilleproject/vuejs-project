import axios from 'axios';

class FitClient {
  constructor() {
    this.apiBaseUrl = 'https://2qvihxpp77.execute-api.us-east-2.amazonaws.com/Staging';

  }

  getActivityTypes() {
    return axios.get(`${this.apiBaseUrl}/activitytypes`)
      .then(res => res.data)
  }

  getUserInfo() {
    return axios.get(`${this.apiBaseUrl}/users/123123/`)
      .then(res => res.data)
  }
}

export default new FitClient();
