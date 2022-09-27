import axios from 'axios'

export async function catApi() {
  fetch('https://aws.random.cat/meow').then((response) => response.json())
}
