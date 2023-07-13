import api from "../client/api.js";

const getData = async () => {
  return api.get()
    .then(res => {
      return res.data.data
    })
    .catch(err => {
      console.log(err)
    })
}

export { getData }