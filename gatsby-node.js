const path = require("path");
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query Blogs {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (data.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: `/blog/` + node.frontmatter.slug,
      component: path.resolve(`./src/templates/blog-details.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
