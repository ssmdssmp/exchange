import { FC } from "react";
import { IPost } from "../types/post";
import { postsAPI } from "../services/postService";
interface PostItemProps {
  post: IPost;
}

const Post: FC<PostItemProps> = ({ post }) => {
  const [handleDelete, {}] = postsAPI.useDeletePostMutation();
  const [handleUpdate, {}] = postsAPI.useUpdatePostMutation();
  const updatePost = (post: IPost) => {
    const updatedBody = prompt();
    updatedBody && handleUpdate({ ...post, title: updatedBody });
  };
  const deletePost = (id: number) => {
    handleDelete(id);
  };
  return (
    <div>
      <div>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <button onClick={() => deletePost(post.id)}>Delete</button>
        <button onClick={() => updatePost(post)}>update Post</button>
      </div>
    </div>
  );
};

export default Post;
