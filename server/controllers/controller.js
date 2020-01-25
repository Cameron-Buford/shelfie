module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')
        
            db.get_inventory().then(products => {
                res.status(200).send(products)
            }).catch(err => {
                res.status(500).send(err)
            })

    },
    postProduct: (req, res) => {
        const db = req.app.get('db')
            const {name, price, pic} = req.body;

            db.post_product(name, price, pic).then(products => {
                res.status(200).send(products)
            }).catch(err => {
                res.status(500).send(err)
            })

    },
    putProduct: (req, res) => {
        const db = req.app.get('db')
        const {product_id} = req.params
        const {name, price, pic} = req.body

        db.put_product(product_id, name, price, pic).then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send(err)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {product_id} = req.params

        db.delete_product(product_id).then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send(err)
        })

    }
}

