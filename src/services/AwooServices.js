import axios from 'axios'

const https = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})

//Users
const registerUser = (data) => https.post('/users/register', data)
const validateUser = (token) => https.get(`/users/validate/${token}`)
const editUser = (data) => https.patch('/users/edit', data)
const deleteUser = () => https.post('/users/delete')
const loginUser = (data) => https.post('/users/login', data)
const googleLoginUser = () => https.post('/users/login/google')
const facebookLoginUser = () => https.post('/users/login/facebook')
const logoutUser = () => https.post('/users/logout')

//Events
const createEvent = (data) => https.post('/events/create', data)
const editEvent = (id, data) => https.patch(`/events/${id}/edit`, data)
const deleteEvent = (id) => https.post(`/events/${id}/delete`)
const enrollEvent = (id) => https.post(`/events/${id}/enroll`)
const getUsersEnrolled = (id) => https.get(`/events/${id}/enrolled`)

//Matches
const getMatches = () => https.get('/users/matches')
const getEventsInCommon = (id) => https.get(`/events/matches/${id}/events-in-common`)
const like = (id) => https.post(`/users/like/${id}`)
const dislike = (id) => https.post(`/users/dislike/${id}`)

export default { 
  registerUser,
  validateUser,
  editUser,
  deleteUser,
  loginUser,
  googleLoginUser,
  facebookLoginUser,
  logoutUser,
  createEvent,
  editEvent,
  deleteEvent,
  enrollEvent,
  getUsersEnrolled,
  getMatches,
  getEventsInCommon,
  like,
  dislike
 }