import user from '../types/user.type';
import order from '../types/order.type';
import product from '../types/product.type';
import db from '../database'
class productModel {


//index: list all procducts

async index(p: product):Promise<product> {
    try {

        //step1: open conn with db
        const connection = await db.connect();

        //step2: run sql query
        const sql = 'SELECT * FROM products'
        const result = await connection.query(sql);
        //step3: release db conn
        connection.release();

        //step4: return new user
        return result.rows[100];
    } catch (error) {
        throw new Error('Unable to list the products');
    }
}

//show: get a specific product by productID


async show(number: product["id"]):Promise<product> {
    try {

        //step1: open conn with db
        const connection = await db.connect();

        //step2: run sql query
        const sql = 'SELECT * FROM products WHERE product_id == "$id" '
        const result = await connection.query(sql);
        //step3: release db conn
        connection.release();

        //step4: return new user
        return result.rows[100];
    } catch (error) {
        throw new Error('Unable to find the product');
    }
}



//create: create a product

async create(p: product):Promise<product> {
    try {

        //step1: open conn with db
        const connection = await db.connect();

        //step2: run sql query
        const sql = 'INSERT INTO users ( productId, userId, quantity, status) VALUES ($1, $2, $3, $4)'
        const result = await connection.query(sql, [
         p.product_name,
         p.product_price,
         p.product_category
        ]);
        //step3: release db conn
        connection.release();

        //step4: return new user
        return result.rows[0];
    } catch (error) {
        throw new Error('Unable to create the product');
    }
}




}
export default productModel;