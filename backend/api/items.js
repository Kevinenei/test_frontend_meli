const router = require('express').Router();
const services = require('./../services/meli');
const authorMiddleware = require('./../middleware/author');

const getSearch = (req, res, next) => {
    if (req.query && req.query.q) {
        services.getProductsByQuery(req.query.q).then((result) => {
            let firstItem = result.data.results[0];
            if (firstItem) {
                const productPromise = services.getProductById(firstItem.id);
                Promise.all([productPromise]).then(
                    (productoPromise) => {
                        const categoryId = productoPromise[0].data.category_id;
                        services.getProductCategoryById(categoryId).then(
                            (categories) => {
                                res.data = Object.assign(
                                    result.data,
                                    { categories: categories && categories.data.path_from_root }
                                );
                                next();
                            }
                        );
                    }
                );
            }
        });
    } else if (req.params && req.params.id) {
        const productPromise = services.getProductById(req.params.id);
        const productDescriptionPromise = services.getProductDescriptionById(req.params.id);

        Promise.all([productPromise, productDescriptionPromise]).then(
            (result) => {
                if (result[0].data === undefined) {
                    res.data = Object.assign(
                        { error: true, msg: result[0].response.data.error }
                    );
                    next();
                    return
                }
                const categoryId = result[0].data.category_id;
                services.getProductCategoryById(categoryId).then(
                    (categories) => {
                        res.data = Object.assign(
                            { producto: [{ ...result[0].data, ...result[1].data }] },
                            { categories: categories && categories.data.path_from_root }
                        );

                        next();
                    }
                );
            }
        );
    }
};

const responseMiddleware = (req, res) => {
    const mapping = {
        author: res.author,
    };
    if (res.data.error && res.data.error) {
        mapping.error = res.data.error;
        mapping.msg = res.data.msg;
    } else {
        mapping.categories = res.data.categories;
        let conditionToSpanish = (condition) => {
            return condition === "new" ? "Nuevo" : "Usado";
        }
        let result = (req.params && req.params.id) ? res.data.producto : res.data.results;
        let formatItem = result.map((item) => {
            newitem = {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: parseInt(item.price),
                    decimals: item.price % 1
                },
                picture: item.thumbnail,
                condition: conditionToSpanish(item.condition),
                free_shipping: item.shipping && item.shipping.free_shipping,
                state_name: item.address ? item.address.state_name : false
            };

            if (req.params && req.params.id) {
                newitem.sold_quantity = item.sold_quantity;
                newitem.description = item.plain_text;
                newitem.picture = item.pictures[0].url,
                    newitem.picture_size = item.pictures[0].size;

            }
            return newitem;
        });

        (req.params && req.params.id) ? mapping.item = formatItem : mapping.items = formatItem;
    }

    res.json(mapping);
};

// api/items/:id
router.get(
    '/:id?',
    authorMiddleware,
    getSearch,
    responseMiddleware
);


module.exports = router;