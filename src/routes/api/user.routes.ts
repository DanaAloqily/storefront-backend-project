import express, { Request, Response } from 'express';

const user_routes = express.Router();


user_routes.get('./' , (req:Request, res:Response) =>{

res.json({
    message: 'Hello World from users',
});

} );
//routes.post(./ , );
//...


export default user_routes;