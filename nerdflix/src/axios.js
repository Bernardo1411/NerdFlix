import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://nerdflix-790a0.firebaseio.com/'
})

export default instance