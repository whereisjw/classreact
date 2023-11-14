import * as productsRepository from '../repository/productsRepository.js'

export async function insertProduct(req,res){
    const {name,image,price,info} = req.body
   const result = productsRepository.insertProduct(name,image,price,info)
   if(result == 'ok'){
    res.json(result)
   }
    }