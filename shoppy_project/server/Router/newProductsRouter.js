import express from 'express'
import * as newProductsContoller from '../controller/newProductsContoller.js'

const router = express.Router()

router.post('/',newProductsContoller.insertProduct)



export default router