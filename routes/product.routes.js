/**
 * This file will contain the routes logic for the
 */
const productController = require("../controllers/product.controller")

module.exports = function(app) {
    app.post("/ecom_db/api/v1/product", productController.create);

    app.get("/ecom_db/api/v1/product", productController.findAll);

    app.get("/ecom_db/api/v1/product/:id", productController.findOne);

    app.get("/ecom_db/api/v1/product/:id", productController.update);

    app.get("/ecom_db/api/v1/product/:id", productController.delete);

}