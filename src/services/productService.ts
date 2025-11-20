import type { Product, CartItem } from "../types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Lija negra agua b 99 1200 9x11 c/25pz Fandeli",
    clave: "F0125200AA",
    stock: 25,
    price: 18350,
    image: "https://via.placeholder.com/100x80.png?text=Lija+Fandeli",
  },
  {
    id: "p2",
    name: "Juego accesorios p/baño c/6pz crom 1200 Dica",
    clave: "F0125200AA",
    stock: 5,
    price: 6500,
    image: "https://via.placeholder.com/100x80.png?text=Juego+Accesorios",
  },
  {
    id: "p3",
    name: "Regulador de voltaje de 1200 VA / 600 W",
    clave: "16182",
    stock: 2,
    price: 1500,
    image: "https://via.placeholder.com/100x80.png?text=Regulador+1200VA",
  },
  {
    id: "p4",
    name: "Lija fina 1200 Dica",
    clave: "F0125200AB",
    stock: 10,
    price: 1035,
    image: "https://via.placeholder.com/100x80.png?text=Lija+1200",
  },
  {
    id: "p5",
    name: "Cepillo de acero 3pz",
    clave: "C32001",
    stock: 3,
    price: 750,
    image: "https://via.placeholder.com/100x80.png?text=Cepillo+3pz",
  },
  {
    id: "p6",
    name: "Sellador multiuso 500ml",
    clave: "S500X",
    stock: 8,
    price: 420,
    image: "https://via.placeholder.com/100x80.png?text=Sellador+500ml",
  },
  {
    id: "p7",
    name: "Cinta aislante 20m",
    clave: "CI20",
    stock: 20,
    price: 95,
    image: "https://via.placeholder.com/100x80.png?text=Cinta+20m",
  },
  {
    id: "p8",
    name: 'Llave ajustable 10"',
    clave: "LA10",
    stock: 4,
    price: 540,
    image: "https://via.placeholder.com/100x80.png?text=Llave+10",
  },
];

export const cart: CartItem[] = [];

export const getAllProducts = () => products.slice();
export const getCart = () => cart.slice();

export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getProductsByClave = (clave: string) =>
  products.filter((p) => p.clave.toLowerCase() === clave.toLowerCase());

export const searchProducts = (q: string) => {
  const s = q.trim().toLowerCase();
  if (!s) return products.slice();
  return products.filter(
    (p) => p.name.toLowerCase().includes(s) || p.clave.toLowerCase().includes(s)
  );
};

export const cartTotal = () =>
  cart.reduce((sum, it) => sum + it.unitPrice * it.quantity, 0);


