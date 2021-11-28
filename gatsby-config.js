module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "jeremy-portfolio",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {     
      resolve: `gatsby-plugin-google-fonts`, // Google Fonts
      options: {
        fonts: [
          `roboto mono`,'poppins'    //Google Font Types
        ],
        display: 'swap'
      }
    }
  ]
}
