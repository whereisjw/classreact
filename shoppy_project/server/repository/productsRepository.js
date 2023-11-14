import { db } from "../db/database.js";

export async function insertProduct(name,image,price,info){
    return db
    .execute(`INSERT INTO shoppy_products(name,image,price,info,pdate)value(?,?,?,?,curdate())`,[name,image,price,info])
    .then(result=>'ok')
} 
