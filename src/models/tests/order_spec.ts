import orderModel from '../order.model';

const order = new orderModel();

describe("order model", () => {
 
  it('should have a show method', () => {
    expect(order.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(order.create).toBeDefined();
  });


  it('create method should add an order', async () => {
    const result = await order.create({
        id: 2,
        product_id: "",
        user_id:"" ,
        product_quantity: "",
        order_status:"",
    });
    expect(result).toEqual({
        id: 2,
        product_id: "",
        user_id:"" ,
        product_quantity: "",
        order_status:"",
    });
  });


  it('show method should return the correct order', async () => {
    const result = await order.show(1);
    expect(result).toEqual({
      id: 1,
      product_id: "",
      user_id:"" ,
      product_quantity: "",
      order_status:"",
    });
  });

});