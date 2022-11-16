import product from '../../types/product.type';
import productModel from '../product.model';

const product = new productModel();


describe("product model", ()=> {

    it('should have an index method', () => {
        expect(product.index).toBeDefined();
      });
    
 it('should have a show method', () => {
        expect(product.show).toBeDefined();
      });
    
 it('should have a create method', () => {
        expect(product.create).toBeDefined();
      });

it("index method should return list of products", async ()=>{
    const result = await product.index;
    expect(result).toEqual([]);
});

it('create method should add a product', async () => {
    const result = await product.create({
        id: 1,
        product_name: "string",
        product_price: "string",
        product_category: "string"
    });
    expect(result).toEqual({
        id: 1,
        product_name: "string",
        product_price: "string",
        product_category: "string"
  });

});

it('show method should return the correct list of user order', async () => {
    const result = await product.show(1);
    expect(result).toEqual({
        id: 1,
        product_name: "string",
        product_price: "string",
        product_category: "string"
    });
  });

});