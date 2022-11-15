import user from '../types/user.type';
import db from '../database'
class userModel {
//index: list all user

//show: get one user

//create: signup
async create(u: user):Promise<user> {
    try {

        //step1: open conn with db
        const connection = await db.connect();

        //step2: run sql query
        const sql = 'INSERT INTO users (email , first_name, last_name, password) VALUES ($1, $2, $3, $4)'
        const result = await connection.query(sql, [
            u.email,
            u.first_name,
            u.last_name,
            u.last_name
        ]);
        //step3: release db conn
        connection.release();

        //step4: return new user
        return result.rows[0];
    } catch (error) {
        throw new Error('Unable to create new user');
    }
}






//orders: get all orders of a specific user *users/:id/orders*

}
export default userModel;