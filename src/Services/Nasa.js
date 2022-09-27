import axios from 'axios'
export function getSearchedContent(value) {
  return axios

    .get(`https://images-api.nasa.gov/search?q=${value}`)
    .then((response) => response)
    .catch((err) => {
      console.log(err)
    })
}
