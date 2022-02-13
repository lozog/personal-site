const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true, // defaults to false
        jsxPragma: "jsx", // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "pages": path.join(__dirname, "src/pages"),
        "src": path.join(__dirname, "src")
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat\:400,600",
        ],
        display: "swap"
      }
    }
  ],
};
