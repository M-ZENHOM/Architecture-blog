import { graphql, useStaticQuery } from "gatsby";

const useGraphql = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
      file(relativePath: { eq: "AboutBg.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            height: 500
            width: 500
            placeholder: DOMINANT_COLOR
          )
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            slug
            hero_image_credit_text
            hero_image_alt
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            date
          }
          id
        }
      }
    }
  `);
  return {
    metaData: data.site.siteMetadata,
    Images: data.file.childImageSharp,
    blogPosts: data.allMarkdownRemark.nodes,
  };
};

export default useGraphql;
