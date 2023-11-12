import React from "react";
import { getPostDelay2 } from "@/lib/api";

const PostsDelay2Seconds: React.FC = async () => {
  const posts2 = await getPostDelay2();
  return (
    <div className="col-span-1">
      <p>Post with delay 2 seconds</p>
      {posts2.map((post: Post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default PostsDelay2Seconds;
