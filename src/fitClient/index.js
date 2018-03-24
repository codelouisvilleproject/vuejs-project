import axios from 'axios';
import auth from '@/auth';

class FitClient {
  constructor() {
    axios.defaults.baseURL = 'https://2qvihxpp77.execute-api.us-east-2.amazonaws.com/Staging/';

  }

  getActivityTypes() {
    return axios.get(`activitytypes`)
      .then(res => res.data)
  }

  getUserProfileInfo(uid) {
    return axios.get(`Users/${uid}`)
      .then(res => res.data)
  }

  getUserActivities() {
    const body = JSON.stringify({token: auth.user.token})

    return axios.get(`Users/${auth.user.id}/activities`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.user.token}`
      }
    })
      .then(res => res.data)
  }

  postUserActivity(activity) {
    const body = JSON.stringify(activity)

    return axios.post(`Users/${auth.user.id}/Activities`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.user.token}`
      }
    })
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
    const body = JSON.stringify({token: userToken})

    return axios.post(`logout`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
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
