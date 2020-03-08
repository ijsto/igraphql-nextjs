import Link from "next/link";
import { useQuery } from "react-apollo";
import ALL_POSTS_Q from "../../api/query/ALL_BOOKS";

const Posts = () => {
  const { data, loading, error } = useQuery(ALL_POSTS_Q);
  if (loading) return <div>Loading ..</div>;
  if (error) console.log({ error });

  console.log({ data });
  return (
    <div>
      <h1>Dynamic Links</h1>
      <p>The link below is a dynamic Next.js link.</p>

      <h1>Posts List</h1>

      <p>
        {/* 
            Visit 
            https://iJS.to
            learn more about dynamic routes
        */}
        <Link href="/p/[name]" as="/p/everybody-writes">
          <a>1. Everybody Writes</a>
        </Link>
      </p>
    </div>
  );
};

Posts.getInitialProps = async ({ query }) => {
  // Visit https://iJS.to to learn how to use fetch in getInitialProps

  return { query };
};

export default Posts;
