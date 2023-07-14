import api from "../client/api.js";

const getData = async () => {
  return api.get()
    .then(res => {
        sessionStorage.setItem('data', JSON.stringify(res.data.data))
      return res.data.data
    })
    .catch(err => {
      console.log(err)
    })
}

export { getData }