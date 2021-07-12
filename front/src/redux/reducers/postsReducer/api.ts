async function getPosts() {
  const response = await fetch(`http://localhost:8080/posts`);
  const user = await response.json();

  return user;
}

const postsAPI = {
  getPosts,
};

export default postsAPI;
