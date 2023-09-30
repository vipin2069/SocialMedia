import { Post } from "../../types";

const Post = ({ post }: { post: Post }) => {
  return (
    <div className="bg-white p-4 m-2 rounded shadow">
      <p>{post.text}</p>
      {/* Render author, image, and other post details */}
    </div>
  );
};

export default Post;
