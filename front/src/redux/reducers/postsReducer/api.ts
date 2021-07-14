async function getPosts() {
  const response = await fetch(`http://localhost:3333/posts`);
  const user = await response.json();

  return user;
}

const postsAPI = {
  getPosts,
};

export default postsAPI;
