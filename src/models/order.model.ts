import user from '../types/user.type';
import order from '../types/order.type';
import product from '../types/product.type';
import db from '../database'

class orderModel {

//show: get a specific order by orderId


async show(number: order["id"]):Promise<order> {
    try {

        //step1: open conn with db
        const connection = await db.connect();

        //step2: run sql query
        const sql = 'SELECT * FROM orders WHERE order_Id == "$id" '
        const result = await connection.query(sql);
        //step3: release db conn
        connection.release();

        //step4: return new user
        return result.rows[0];

    } catch (error) {
        throw new Error('Unable to find the order');
    }
}




//create: place an order
async create(o: order):Promise<order> {
    try {

        //step1: open conn with db
        const connection = await db.connect();

        //step2: run sql query
        const sql = 'INSERT INTO users ( productId, userId, quantity, status) VALUES ($1, $2, $3, $4)'
        const result = await connection.query(sql, [
            o.id,
            o.order_status,
            o.product_id,
            o.product_quantity,
            o.user_id
        ]);
        //step3: release db conn
        connection.release();

        //step4: return new user
        return result.rows[0];
    } catch (error) {
        throw new Error('Unable to place the order');
    }
}




}
export default orderModel;