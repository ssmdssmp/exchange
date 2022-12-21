import { useEffect, useState } from "react";
import { postsAPI } from "../services/postService";
import { IPost } from "../types/post";
import Post from "./Post";
const PostsContainer = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    isLoading,
    isError,
    refetch,
  } = postsAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: 1000,
  });
  const [createPost, {}] = postsAPI.useCreatePostMutation({});
  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };
  return (
    <div>
      <button onClick={() => handleCreate()}>ADD POST</button>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error</h1>}
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      <button onClick={() => refetch()}>REFETCH</button>
    </div>
  );
};

export default PostsContainer;
