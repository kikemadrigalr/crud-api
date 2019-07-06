const { products } = require('../db.json');

module.exports = {
  //obtener products
  "getProducts": (req, res) => {
    res.json({ "products": products });
  },

  //agregar products
  "addProducts": (req, res) => {
    const { name } = req.body
    
    products.push({
      id: products.length,
      name
    })
    res.json({
      "Response": "Succes",
      "msg": "Registro agregado"
    });
  },
  "updateProducts": (req, res) => {
    //req.params.id recibe el id que se envia como parametro
    const { id } = req.params;
    const { name } = req.body;

    products.forEach(product => {
      if( product.id === Number(id) )
      {
        product.name = name;
      }
    });

    res.json({
      "Succes": "True",
      "msg": "Registro actualizado"
    });
  },

  "deleteProducts": (req, res) => {
    const { id } = req.params;

    products.forEach((product, i) => {
      if( product.id === Number(id) )
      {
        products.splice(i, 1);
      }
    });

    res.json({
      "Succes": "True",
      "msg": "Registro Eliminado"
    });
  }
}