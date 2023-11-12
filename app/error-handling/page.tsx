import { getPostError } from "@/lib/api";

export default async function ErrorHandling() {
  const posts = await getPostError();
  return (
    <div>
      <h2>Error Handling Functionality</h2>
      {posts.map((post: Post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
