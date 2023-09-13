import axios from "axios";

export async function getUser() {
  return axios
    .get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return error.response.status;
    });
}
