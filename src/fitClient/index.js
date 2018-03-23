import axios from 'axios';

class FitClient {
  constructor() {
    axios.defaults.baseURL = 'https://2qvihxpp77.execute-api.us-east-2.amazonaws.com/Staging/';
  }

  getActivityTypes() {
    return axios.get(`activitytypes`)
      .then(res => res.data)
  }

  getUserProfileInfo(uid) {
    return axios.get(`users/${uid}`)
      .then(res => res.data)
  }

  getUserActivities(uid) {
    return axios.get(`users/${uid}/activities`)
      .then(res => res.data)
  }

  postSignIn(creds) {
    const body = JSON.stringify(creds)

    return axios.post(`login`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  postSignOut(userToken) {
    const body = JSON.stringify(userToken)

    return axios.post(`logout`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  postSignUp(newUser) {
    const body = JSON.stringify(newUser)

    return axios.post(`signup`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.data)
  }
}

export default new FitClient();
