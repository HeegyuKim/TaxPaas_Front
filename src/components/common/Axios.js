import axios from 'axios'


var Axios = axios.create({
  baseURL:  "http://127.0.0.1:8000",
  timeout: 5000,
  method: 'GET',
  headers: {
    'Authorization': 'Basic aGVla3VlODNAZ21haWwuY29tOmhrODU1NjQzNQ=='
  }
})

export default Axios;
