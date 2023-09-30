import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../graphql/mutations";

const CreatePost = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [createPost] = useMutation(CREATE_POST);

  const handleCreatePost = async () => {
    try {
      await createPost({ variables: { text, image } });
      setText("");
      setImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <textarea
        placeholder="Write your post..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};
export default CreatePost;
