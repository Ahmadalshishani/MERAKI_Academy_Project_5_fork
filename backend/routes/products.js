const express = require("express");
const { createProduct, getAllProducts, getProductsByCategoryId, updateProduct, deleteProduct,getProductById } = require("../controllers/products");

//authentication and authorization
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const productsRouter = express.Router();

productsRouter.post("/",authentication,authorization("CREATE_PRODUCTS"), createProduct);
productsRouter.get("/",getAllProducts)
productsRouter.get("/product/:id",getProductById)
productsRouter.get("/:id",getProductsByCategoryId)
productsRouter.put("/:id",authentication,authorization("CREATE_PRODUCTS"),updateProduct)
productsRouter.delete("/:id",authentication,authorization("CREATE_PRODUCTS"),deleteProduct)
module.exports = productsRouter;
