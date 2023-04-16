import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostDetailPage() {
  // 1. Write the code that initializes a state variable named
  //    post to null
  const [post, setPost] = useState(null);

  // 2. Use react-router-dom's useParams hook to access
  //    the postId route parameter defined in App.js.
  //    Don't forget to import useParams.
  const { postId } = useParams();
  // 3a. Write the code that stubs up a useEffect hook that is dependent
  //     upon postId. Hint: Dependencies are listed in the dependency array.
  useEffect(() => {});
  // 3b. In the useEffect, make a fetch request to
  //     https://jsonplaceholder.typicode.com/posts/{postId},
  //     substituting {postId} with the postId obtained in step 2.
  // 3c. Update the post state variable with the retrieved post

  // The following JSX is complete...
  return (
    <div>
      {post && (
        <>
          <h1>Post #{post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
      <Link to="/">POST LIST</Link>
    </div>
  );
}
