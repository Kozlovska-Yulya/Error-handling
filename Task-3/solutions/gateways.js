export const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
};

export const fetchRepositories = (url) => {
  return fetch(url).then((response) => response.json());
};
