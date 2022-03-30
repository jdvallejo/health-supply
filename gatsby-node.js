const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const specialityPage = path.resolve("./src/templates/speciality-page.js");

  const result = await graphql(
    `
      {
        allStrapiSpeciality {
          nodes {
            nombre
            slug
          }
        }
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
      `There was an error loading your Strapi Pages`,
      result.errors
    );

    return;
  }

  const specialities = result.data.allStrapiSpeciality.nodes;

  if (specialities.length > 0) {
    specialities.forEach((speciality) => {
      createPage({
        path: `/speciality/${speciality.slug}`,
        component: specialityPage,
        context: {
          slug: speciality.slug,
        },
      });
    });
  }

  const productPost = path.resolve("./src/templates/product-post.js");

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
