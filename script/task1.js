function createProduct(obj, callback) {
    const id = Date.now(); 
    const newProduct = { ...obj, id };
    callback(newProduct);
}
  
function logProduct(product) {
    console.log(product);
}
  
function logTotalPrice(product) {
    console.log(`Загальна вартість товару: ${product.price}`);
}
  
const productWithoutId = { name: "Кава", price: 100 };
  
createProduct(productWithoutId, logProduct); 
createProduct(productWithoutId, logTotalPrice); 