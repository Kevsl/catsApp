import axios from 'axios'

export function getCity(latitude, longitude) {
  return axios
    .get(
      `https://api-adresse.data.gouv.fr/reverse/?lat=${latitude}&lon=${longitude}`
    )
    .then((res) => res.data.features[0].properties)
}
