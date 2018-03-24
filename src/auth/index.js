
class Auth {
  constructor() {
    this.isLoggedIn = this.getUser().token ? true : false
    this.token = this.getToken()
    this.user = this.getUser()
  }

  signIn(token, user) {
    this.isLoggedIn = true
    this.token = token
    this.user = user
    localStorage.setItem('token', this.token)
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  signOut() {
    this.isLoggedIn = false
    this.token = ''
    localStorage.setItem('token', '')
  }

  currentStatus() {
    return this.user.token
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user'))
    return this.user
  }

  getToken() {
    this.token = localStorage.getItem('token')
    return this.token
  }


}

const auth = new Auth();

export default auth;
