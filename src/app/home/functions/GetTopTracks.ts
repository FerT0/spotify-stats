import axios from "axios";

export async function getTopTracks(term: String) {
  return axios
    .get(
      `https://api.spotify.com/v1/me/top/tracks?time_range=${term
        .split(" ")
        .join("_")}&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      return error.response.status;
    });
}
