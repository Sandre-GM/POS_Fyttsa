export type Product = {
  id: string;
  name: string;
  clave: string;
  stock: number;
  price: number;
  image: string;
};

export type CartItem = {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
};
