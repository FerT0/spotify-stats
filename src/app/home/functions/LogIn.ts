export async function logIn(token: string) {
  if (token !== undefined) {
    localStorage.setItem("access_token", token);
  }
}
