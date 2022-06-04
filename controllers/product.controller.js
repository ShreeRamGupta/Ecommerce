/**
 * gf
 */
const db = require("../models");
const Product = db.product;
/**
 * Create and save a new product
 */
exports.create = (req, res) => {


    /**
     * Validation of the request body
     */
    if (!req.body.name) {
        console.log('Please provide a name');
        res.status(400).send({
            message: "Name of the product can't be empty!",
        })
        return;
    }

    if (!req.body.cost) {
        res.status(400).send({
            message: "Cost of the product can't be empty !"
        })
        return;
    }


    const product = {
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost
    }

    Product.create(product)
        .then(product => {
            console.log('product namr:[${product.name}] got  inserted in db');
            res.status(200).send(product);
        })
        .catch(err => {
            console.log('');
            res.status(500).send({
                message: "Some internal error"
            })
        })
}

//Get a list of all the products

exports.findAll = (req, res) => {

    console.log(req.query);
    let productName = req.query.name;
    let promise;

    if (productName) {
        promise = Product.findAll({
            where: {
                name: productName
            }
        })
    } else {
        promise = Product.findAll();
    }
    promise.then(product => {
        res.status(200).send(product);
    }).catch(err => {
        res.status(500).send({
            message: "Some insternal error whi;le fecthing all products"
        })
    })
}



exports.findOne = (req, res) => {
    const productId = req.params.id;

    Product.findByPk(productId).then(product => {
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }
        res.status(200).send(product);
    }).catch(err => {
        res.status(500).send({ message: "Some internal error while fetching product based on id " })
    })
}


exports.update = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({
            message: "Name of the produt cannot be empty"
        })
    }

    if (!req.body.cost) {
        res.status(400).send({
            message: "Cost of the produt cannot be empty"
        })
    }

    const product = {
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost
    }

    const productId = req.body.id;

    Product.update(product, {
        where: {
            id: productId,
        }
    }).then(updateProduct => {
        Product.findByPk(productId)
            .then(product => {
                res.status(200).send(product);
            })
            .catch(err => {
                res.status(500).send({ message: "Updation happend successfully,but some internal issue occur" });
            })
    }).catch(err => {
        res.status(500).send({
            message: "Some internal error while updating product details"
        })
    })
}


exports.delete = (req, res) => {

    const productId = req.params.id;

    Product.destroy({
            where: { id: productId },
        })
        .then(result => {
            res.status(200).send({ message: "Successfully deleted the product" });
        }).catch((err) => {
            res.status(500).send({
                message: "Some internal error while deleting the product"
            });
        });
}

/**
 * post 
 * get 
 * 
 * del
 * 
 * get
 */