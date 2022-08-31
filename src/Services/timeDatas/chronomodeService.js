import axios from 'axios'
const qs = require('qs')
import { REACT_APP_API_URL } from '@env'

export async function createChronoMode(chronomode, userId, access_token) {
  let axiosConfig = {
    headers: {
      //prettier-ignore
      'Authorization': `Bearer ${access_token}`,
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  let url = `${REACT_APP_API_URL}chronomode/create`

  return await axios
    .post(
      url,
      qs.stringify({
        nom_chronomode: chronomode,
        utilisateur_id: userId,
        date_chronomode: new Date(Date.now()).toISOString(),
      }),
      axiosConfig
    )
    .then((res) => {
      {
        res
      }
    })
    .catch((err) => {
      throw err
    })
}

export async function getUsersChronomode(userId, accessToken) {
  let axiosConfig = {
    headers: {
      //prettier-ignore
      'Authorization': `Bearer ${accessToken}`,
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  let url = `${REACT_APP_API_URL}chronomode/all`

  return await axios
    .post(
      url,
      qs.stringify({
        utilisateur_id: userId,
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
