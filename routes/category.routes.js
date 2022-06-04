/**
 * this file will contain the routing logic for the category controller
 */

const categoryController = require("../controllers/category.controller")

module.exports = function(app) {
    // "ecom_db/api/v1/category", is fake url for the browser

    //Route for the POST request to create a category
    app.post("/ecom_db/api/v1/categories", categoryController.create);

    //Route for the GET request to fatch all the categories
    app.get("/ecom_db/api/v1/categories", categoryController.findAll);

    //Route for the GET request to fetch a category based on category id

    app.get("/ecom_db/api/v1/categories/:id", categoryController.findOne);

    //Route for the PUT request to update a category based on category id
    app.get("/ecom_db/api/v1/categories/:id", categoryController.update);

    //Route for the Delete request to remove/delete a category based on category id
    app.get("/ecom_db/api/v1/categories/:id", categoryController.delete);



}