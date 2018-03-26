import axios from 'axios';
import auth from '@/auth';

class FitClient {
  constructor() {
    axios.defaults.baseURL = 'https://2qvihxpp77.execute-api.us-east-2.amazonaws.com/Staging/';

  }

  getUserProfileInfo() {
    return axios.get(`users/${auth.user.id}`)
      .then(res => res.data)
  }

  getActivityTypes() {
    return axios.get(`activitytypes`)
      .then(res => res.data)
  }

  getUserActivities() {
    return axios.get(`users/${auth.user.id}/activities`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.user.token}`
      }
    })
      .then(res => res)
  }

  putUserActivity(activity) {
    const body = JSON.stringify(activity)

    return axios.put(`users/${auth.user.id}/activities`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.user.token}`
      }
    })
  }

  postUserActivity(activity) {
    const body = JSON.stringify(activity)

    return axios.post(`users/${auth.user.id}/activities`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.user.token}`
      }
    })
  }

  deleteUserActivity(aId) {
    return axios.delete(`users/${auth.user.id}/activities${aId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
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



  getLeaders() {
    return axios.get(`leader`)
      .then(res => res)
  }
}

export default new FitClient();
