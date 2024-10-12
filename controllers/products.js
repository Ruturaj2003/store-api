const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({
    nbHits: products.length,
    products,
  });
};
const getAllProducts = async (req, res) => {
  const allowedQueryParams = ["name", "price", "company", "rating"];
  const query = {};

  // Validate query parameters
  for (const param of allowedQueryParams) {
    if (req.query[param]) {
      query[param] = req.query[param];
    }
  }
  // Apply regex for 'name' only if it's present in the query
  if (query.name) {
    query.name = { $regex: query.name, $options: "i" }; // Case-insensitive regex for name
  }
  const products = await Product.find(query);
  res.status(200).json({
    nbHits: products.length,
    products,
  });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
