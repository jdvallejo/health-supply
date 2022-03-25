const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const productPost = path.resolve("./src/templates/product-post.js");

  const result = await graphql(
    `
      {
        allStrapiProduct {
          nodes {
            nombreComercial
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi products`,
      result.errors
    );

    return;
  }

  const products = result.data.allStrapiProduct.nodes;

  if (products.length > 0) {
    products.forEach((product) => {
      createPage({
        path: `/product/${product.slug}`,
        component: productPost,
        context: {
          slug: product.slug,
        },
      });
    });
  }
};
