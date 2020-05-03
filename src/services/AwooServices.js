import axios from 'axios'

const https = axios.create({
    baseURL: "https://awoo-api.herokuapp.com",
    withCredentials: true
})

//Users
const registerUser = (data) => https.post('/users/register', data)
const validateUser = (token) => https.get(`/users/validate/${token}`)
const editUser = (data) => https.patch('/users/edit', data)
const deleteUser = () => https.post('/users/delete')
const loginUser = (data) => https.post('/users/login', data)
const socialLoginUser = () => https.post('/users/login/google')
const logoutUser = () => https.post('/users/logout')

//Companies
const registerCompany = (data) => https.post('/companies/register', data)
const validateCompany = (token) => https.get(`/companies/validate/${token}`)
const editCompany = (data) => https.patch('/companies/edit', data)
const deleteCompany = () => https.post('/companies/delete')
const loginCompany = (data) => https.post('/companies/login', data)
const socialLoginCompany = () => https.post('/companies/login/google')
const logoutCompany = () => https.post('/companies/logout')

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
  socialLoginUser,
  logoutUser,
  registerCompany,
  validateCompany,
  editCompany,
  deleteCompany,
  loginCompany,
  socialLoginCompany,
  logoutCompany,
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