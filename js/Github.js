export class GithubUser {
  static search(username) {
    const endPoint = `https://api.github.com/users/${username}`

    return fetch(endPoint)
      .then(data => data.json())
      .then((
        { login,
          followers,
          following,
          public_repos,
          company,
          location
        }) =>
      ({
        login,
        followers,
        following,
        public_repos,
        company,
        location
      }))
  }
}