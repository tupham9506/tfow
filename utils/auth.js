function hash (username, password) {
  return btoa(`${username}:${password}`);
}

export {
  hash
};
