module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "travelWebsite",
  },
  plugins: ["gatsby-plugin-styled-components",
  `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },],
  

};
