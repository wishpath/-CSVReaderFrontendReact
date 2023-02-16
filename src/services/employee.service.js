import httpClient from '../http-common'

const getAll = () => {
   return httpClient.get('/load-all')
}

export default {getAll}