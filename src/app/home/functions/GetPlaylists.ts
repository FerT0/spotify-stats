import axios from "axios";

export async function getPlaylists() {
  return axios
    .get("https://api.spotify.com/v1/me/playlists", {
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
