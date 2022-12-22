import axios from "axios";

export const jwtVerify = (user) => {
  const currentUser = {
    email: user.email
  };
  axios.post(`https://the-gallery-server.vercel.app/jwt`, currentUser)
    .then(res => {
      // console.log(res);
      localStorage.setItem('aceessToken', res.data.token);
    })
}