import user from '../../types/user.type';
import userModel from '../user.model';

const user = new userModel();


describe("user model", ()=> {

    it('should have an index method', () => {
        expect(user.index).toBeDefined();
      });
    
 it('should have a show method', () => {
        expect(user.show).toBeDefined();
      });
    
 it('should have a create method', () => {
        expect(user.create).toBeDefined();
      });
          
 it('should have a orders method', () => {
    expect(user.orders).toBeDefined();
  });

it("index method should return list of users", async ()=>{
    const result = await user.index;
    expect(result).toEqual([]);
});

it('create method should add a user', async () => {
    const result = await user.create({
        id: 1,
        first_name: "string",
        last_name: "string",
        password: "string",
    });
    expect(result).toEqual({
        id: 1,
        first_name: "string",
        last_name: "string",
        password: "string",
  });

});

it('orders method should return the correct list of user order', async () => {
    const result = await user.orders(1);
    expect(result).toEqual({
      id: 1,
      product_id: "",
      user_id: "",
      product_quantity: "",
      order_status:"",
    });
  });

});