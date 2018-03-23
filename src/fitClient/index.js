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

  postSignIn(creds) {
    const body = JSON.stringify(creds)
    console.log(body)
    return axios.post(`${this.apiBaseUrl}/login`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.data)
  }

  postSignUp(newUser) {
    const body = JSON.stringify(newUser)

    return axios.post(`${this.apiBaseUrl}/signup`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.data)
  }
}

export default new FitClient();
