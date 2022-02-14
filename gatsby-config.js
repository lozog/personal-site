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
        "components": path.join(__dirname, "src/components"),
        "pages": path.join(__dirname, "src/pages"),
        "src": path.join(__dirname, "src"),
        "assets": path.join(__dirname, "src/assets")
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat\:400,600",
        ],
        display: "swap"
      }
    },
    "gatsby-plugin-react-svg"
  ]
};
