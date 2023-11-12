import React from "react";
import { getPostDelay4 } from "@/lib/api";

const PostsDelay4Seconds: React.FC = async () => {
  const posts = await getPostDelay4();
  return (
    <div className="col-span-1">
      <p>Post with delay 4 seconds</p>
      {posts.map((post: Post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default PostsDelay4Seconds;
