import api from "../client/api.js";

const getData = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  return api.get()
    .then(res => {
      return res.data.data
    })
    .catch(err => {
      console.log(err)
    })
}

export { getData }