import axios from "axios";

export async function getTopTracks() {
  return axios
    .get("https://api.spotify.com/v1/me/top/tracks?limit=50", {
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
