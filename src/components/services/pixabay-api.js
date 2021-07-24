import axios from 'axios'

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '21764210-8d882ab68fe5176a0369b7247'
function getPixabay(query, page) {
  
  return axios({
    method: 'GET',
    url: `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`,
  })
}

export default getPixabay
