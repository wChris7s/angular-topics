import { Product, taxCalculator } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "Iphone 15",
        price: 200
    }
];

// Tax = 0.15
const [total, tax] = taxCalculator({
    tax: 0.15,
    products: shoppingCart
});

console.log("Total: ", total);
console.log("Tax: ", tax);