import axios from "axios";

export const jwtVerify = (email) => {
  axios.post(`https://the-gallery-server.vercel.app/jwt`, email)
    .then(res => {
      // console.log(res);
      localStorage.setItem('aceessToken', res.data.token);
    })
}