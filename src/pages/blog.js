import React from "react";
import BlogCard from "../components/BlogCard";
import Layout from "../components/layout";
import useGraphql from "../Hooks/useGraphql";
import Seo from "../components/Seo";

const Blog = () => {
  const { blogPosts } = useGraphql();

  return (
    <Layout>
      <div className="grid grid-cols-fluid w-full place-items-center place-content-center gap-5 mx-auto py-[100px] bg-[#1e1e1e]">
        {blogPosts.map((blo) => (
          <BlogCard key={blo.id} data={blo} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
export const Head = () => <Seo title="Blog Page" />;
