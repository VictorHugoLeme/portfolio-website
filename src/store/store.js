import api from "../client/api.js";

const getData = async () => {
  return localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : api.get()
      .then(res => {
        localStorage.setItem('data', JSON.stringify(res.data.data))
        return res.data.data
      })
      .catch(err => {
        console.log(err)
      })
}

export { getData }