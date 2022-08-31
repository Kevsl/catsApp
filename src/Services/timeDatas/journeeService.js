import axios from 'axios'
const qs = require('qs')
import { REACT_APP_API_URL } from '@env'

export async function createJournee(userId, access_token) {
  let axiosConfig = {
    headers: {
      //prettier-ignore
      'Authorization': `Bearer ${access_token}`,
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  let url = `${REACT_APP_API_URL}day`

  return await axios
    .post(
      url,
      qs.stringify({
        utilisateur_id: userId,
        debut_journee: new Date(Date.now()).toISOString(),
        conduite_journee: 0,
        repos_journee: 0,
        service_journee: 0,
      }),
      axiosConfig
    )
    .then((res) => res)
    .catch((err) => {
      throw err
    })
}

export async function closeJournee(
  userId,
  accessToken,
  id_journee,
  drivingTime,
  breakTime,
  serviceTime
) {
  let axiosConfig = {
    headers: {
      //prettier-ignore
      'Authorization': `Bearer ${accessToken}`,
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  let url = `${REACT_APP_API_URL}day/` + `${id_journee}`

  return await axios
    .patch(
      url,
      qs.stringify({
        utilisateur_id: userId,
        fin_journee: new Date(Date.now()).toISOString(),
        conduite_journee: drivingTime,
        repos_journee: breakTime,
        service_journee: serviceTime,
      }),
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw err
    })
}

export async function updateChronoMode(chronomode, date_chronomode, userId) {
  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  let url = `${REACT_APP_API_URL}chronomode`

  return await axios
    .patch(
      url,
      qs.stringify({
        nom_chronomode: chronomode,
        utilisateur_id: userId,
        date_chronomode: Date.now(new Date()),
      }),
      axiosConfig
    )
    .then((res) => res)
}

export async function deleteChronoMode(chronomode, userId) {
  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  let url = `${REACT_APP_API_URL}chronomode/${userId}`

  return await axios
    .delete(
      url,
      qs.stringify({
        nom_chronomode: chronomode,
        utilisateur_id: userId,
        date_chronomode: Date.now(new Date()),
      }),
      axiosConfig
    )
    .then((res) => res)
}
