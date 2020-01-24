module.exports = {
    getProduct: (req, res) => {
        const db = req.app.get('db')
        
            db.get_products().then(products => {
                res.status(200).send(products)
            }).catch(err => {
                res.status(500).send(err)
            })

    },
    postProduct: (req, res) => {
        const db = req.app.get('app')
            const {pic, name, price} = req.body;

            db.post_products(pic, name, price).then(products => {
                res.status(200).send(products)
            }).catch(err => {
                res.status(500).send(err)
            })

    },
    putProduct: (req, res) => {
        const db = req.app.get('db')
        const {product_id} = req.params
        const {pic, name, price} = req.body

        db.put_products(product_id, pic, name, price).then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send(err)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {product_id} = req.params;

        db.delete_products(product_id).then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send(err)
        })

    }
}