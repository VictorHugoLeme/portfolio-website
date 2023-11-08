import api from "../client/api.js";

const getData = async () => {
  return localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : api.get('experience')
      .then(res => {
        localStorage.setItem('data', JSON.stringify(res.data))
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
}

const getCvUrl = async (language) => {
  return api.get('/cv/' + language)
}

export { getData, getCvUrl }