module.exports = {
  getAll: (req, res, next) => {
    const db = req.app.get("db");
    db.get_inventory()
      .then(shelfieproducts => res.status(200).send(shelfieproducts))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  },

  createProduct: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, image_url } = req.body;

    db.create_product([name, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  },

  deleteItem: (req, res, next) => {
    const db = req.app.get("db")
    const { params } = req;
    db.delete_item(params.id)
      .then(() => res.status(200).send())
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  }
};
