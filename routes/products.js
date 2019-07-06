//rutas de servidor
const express = require('express');
//importar router
const router = express.Router();

const {
  getProducts, 
  addProducts,
  updateProducts,
  deleteProducts
} = require('../controllers/products');
//console.log(products)
//para definir rutas express utiliza dos formas

//1
//router.get('/', (req, res) => { })


//2
router.route('/')
  //el navegador quiere obtener algo
  .get(getProducts) 

  //el servidroe envia datos a traves de post
  .post(addProducts) 

  //localhost:3000/id se recibe el id deun producto en la url
  router.route('/:id')
  .put(updateProducts)
  .delete(deleteProducts)


module.exports = router;