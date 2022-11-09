import axios from "axios";

export const jwtVerify = (email) => {
  axios.post(`http://localhost:5000/jwt`, email)
    .then(res => {
      // console.log(res);
      localStorage.setItem('aceessToken', res.data.token);
    })
}