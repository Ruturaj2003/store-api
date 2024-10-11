const getAllProductsStatic = async (req, res) => {
  res.status(200).json({
    msg: "Fetch All Testing Products...",
  });
};
const getAllProducts = async (req, res) => {
  res.status(200).json({
    msg: "Fetch All Products...",
  });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
