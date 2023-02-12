import httpClient from '../http-common'

const upload = data => {
    return httpClient.put('/files', data);
 }

export default {upload}