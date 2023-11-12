import PostsDelay2Seconds from "@/components/suspense/PostsDelay2Seconds";
import PostsDelay4Seconds from "@/components/suspense/PostsDelay4Seconds";
import { Suspense } from "react";

export default async function SuspensePage() {
  return (
    <div className="">
      Posts
      <div className="grid grid-cols-2">
        <Suspense fallback={<p>Loading posts after 2 seconds</p>}>
          <PostsDelay2Seconds />
        </Suspense>
        <Suspense fallback={<p>Loading posts after 4 seconds</p>}>
          <PostsDelay4Seconds />
        </Suspense>
      </div>
    </div>
  );
}
