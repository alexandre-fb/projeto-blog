import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

async function getPost(id) {
  const response = await fetch(`http://localhost:3000/json/post-${id}.json`);
  return await response.json();
}

const PostDetails = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const post = await getPost(id);
      setPost(post.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Link to="/">Voltar para a página de posts</Link>
      <h1>{post.title}</h1>
      <img src={post.image} alt="img post" />
      <p>{post.text}</p>
    </>
  );
};

export { PostDetails };
