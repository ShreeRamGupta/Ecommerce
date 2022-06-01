/**
 * 
 * /**export is use for create a function or  code
 *  reuseable for everywear outsaid the code only
 *  with call that fucntion for use entier code///
 * 
 *
 */


const db = require("../models");
const Category = db.category;

/**
 * POST:Create and save a new category
 */
exports.create = (req, res) => {
    /** 
     * Validation of request body
     */

    if (!req.body.name) {
        res.status(400).send({
            message: "Name of the category can't be empty"
        })
        return;
    }
    /**
     * Creation of the category object to be stored in the db.
     */

    const category = {
        name: req.body.name,
        description: req.body.description
    };

    Category.create(category)
        .then(category => {
            console.log('Category name :${category.name} got inserted.');
            res.status(200).send(category);
        })
        .catch(err => {
            console.log('Issue in inserting category name: [${category.name}]')
            console.log('Error message : ${err.message}');
            res.status(500).send({
                message: "Some internal error while storing the category"
            });
        })
}

/**
 * Get a list of all the categories 
 * 
 */

exports.findAll = (req, res) => {
    let categoryName = req.params.name;
    let promise;
    if (categoryName) {
        promise = Category.findAll({
            where: {
                name: categoryName
            }
        });
    } else {
        promise = Category.findAll();
    }
    promise
        .then(category => {
            res.status(200).send(categories);
        })
        .catch(erro => {
            res.status(500).send({
                message: "some internal error while fetching categories"
            })
        });
}

/**
 * Get a category based pn the category id
 */

exports.findOne = (req, res) => {
        const categoryId = req.params.id;
        Category.findByPK(categoryId)
            .then(category => {
                res.status(200).send(category);
            })
            .catch(erro => {
                res.status(500).send({
                    message: "some internal error while fetching the categories",
                })
            });
    }
    /** 
     * Update the existing category
     */


exports.update = (req, res) => {
    const category = {
        name: req.body.name,
        description: req.body.description
    };
    const categoryId = req.params.id

    Category.update(category, {
            where: { id: categoryId },
        })
        .then(updateCategory => {
            //where the updation happened successful.
            //you need to send the update row to the table.
            //But while fecthing that row and sending it to use
            //there can be a error.
            Category.findByPK(categoryId)
                .then(category => {
                    res.status(200).send(category);
                })
                .catch(err => {
                    res.status(500).send({
                        message: "some insternal error while fetchng category"
                    })
                })
        })
        .catch(err => {
            //where the updation task failed.
            res.status(500).send({
                message: "some insternal error while upadating the categories"
            })
        })
}