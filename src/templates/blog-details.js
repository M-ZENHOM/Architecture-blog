import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const image = getImage(data.markdownRemark.frontmatter.hero_image);
  const { title } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className="text-white md:py-[200px] w-5/6 mx-auto">
        <h2 className="font-bold uppercase text-2xl mb-5 mt-5">{title}</h2>
        <GatsbyImage image={image} alt="test" className="object-fit" />
        <div
          className="mt-5 w-[90%]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogDetailPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        hero_image {
          childImageSharp {
            gatsbyImageData(height: 700, width: 1500)
          }
        }
      }
    }
  }
`;
export default BlogDetails;
