/* 
Dada una lista de pedidos de una tienda online, cada 
pedido contiene el nombre del cliente, los productos comprados y la cantidad.
Debes escribir una función que calcule cuánto gastó cada cliente en total y devuelva 
un objeto con el formato: 
EJEMPLO:
{
  "Ana": 50,
  "Luis": 130,
  "Pedro": 80
}


*/

const orders = [
    { customer: "Ana", products: [{ name: "Zapatos", price: 25, qty: 2 }] },
    { customer: "Luis", products: [{ name: "Camisa", price: 30, qty: 3 }, { name: "Pantalón", price: 20, qty: 2 }] },
    { customer: "Pedro", products: [{ name: "Gorra", price: 10, qty: 4 }, { name: "Sudadera", price: 40, qty: 1 }] },
    { customer: "Ana", products: [{ name: "Bolso", price: 50, qty: 1 }] }
];

function getTotal(orders) {
    let total = {};
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const totalOrder = order.products.reduce((acc, product) => acc + product.price * product.qty, 0);

        if (total[order.customer]) {
            total[order.customer] += totalOrder;
        } else {
            total[order.customer] = totalOrder;
        }
    }
    return total;
}

console.log(getTotal(orders));