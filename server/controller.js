module.exports = {
  getAll: (req, res) => {
      const db = req.app.get('db')
      db.get_inventory()
      .then((shelfieproducts)=>res.status(200).send(shelfieproducts))
      .catch(err =>{
        res.status(500).send({errorMessage: 'Something went wrong.'})
    console.log(err)
    })
     
  }
};
