import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const BlogCard = ({ data }) => {
  const image = getImage(data.frontmatter.hero_image);
  return (
    <div key={data.id} className="text-white flex flex-col space-y-3">
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={image}
          alt={data.frontmatter.hero_image_alt}
          className="w-[500px] h-[300px] md:w-[350px]"
        />
      </Link>
      <h2>{data.frontmatter.title}</h2>
      <span>{data.frontmatter.date}</span>
    </div>
  );
};

export default BlogCard;
