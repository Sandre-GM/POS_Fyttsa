import { create } from "zustand";
import type { Product, CartItem } from "../types";
import {
  products as initialProducts,
  cart as initialCart,
  getProductById,
} from "../services/productService";

type CartStore = {
  products: Product[];
  cart: CartItem[];
  searchQuery: string;

  setSearchQuery: (query: string) => void;
  addToCart: (productId: string, quantity?: number) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;

  cartTotal: () => number;
  totalItems: () => number;
};

const generateId = (prefix = "id") =>
  `${prefix}_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

export const useCartStore = create<CartStore>((set, get) => ({
  products: initialProducts,
  cart: initialCart,
  searchQuery: "",

  setSearchQuery: (query: string) => set({ searchQuery: query }),

  addToCart: (productId: string, quantity: number = 1) => {
    const product = getProductById(productId);
    if (!product) return;

    set((state) => {
      const existingCartItem = state.cart.find(
        (cartItem: CartItem) => cartItem.productId === productId
      );
      if (existingCartItem) {
        const newQuantity = Math.min(
          existingCartItem.quantity + quantity,
          product.stock
        );
        return {
          cart: state.cart.map((cartItem: CartItem) =>
            cartItem.id === existingCartItem.id
              ? { ...cartItem, quantity: newQuantity }
              : cartItem
          ),
        };
      }

      const newCartItem: CartItem = {
        id: generateId("cart"),
        productId: product.id,
        quantity: Math.min(quantity, product.stock),
        unitPrice: product.price,
      };

      return { cart: [...state.cart, newCartItem] };
    });
  },

  updateQuantity: (cartItemId: string, quantity: number) => {
    set((state) => {
      const cartItem = state.cart.find(
        (cartItem) => cartItem.id === cartItemId
      );
      if (!cartItem) return {} as Partial<typeof state>;

      if (quantity <= 0) {
        return {
          cart: state.cart.filter((cartItem) => cartItem.id !== cartItemId),
        } as Partial<typeof state>;
      }

      const product = getProductById(cartItem.productId);
      const newQuantity = product
        ? Math.min(quantity, product.stock)
        : quantity;

      return {
        cart: state.cart.map((cartItem) =>
          cartItem.id === cartItemId
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        ),
      } as Partial<typeof state>;
    });
  },

  removeFromCart: (cartItemId: string) =>
    set((state) => ({
      cart: state.cart.filter(
        (cartItem: CartItem) => cartItem.id !== cartItemId
      ),
    })),

  clearCart: () => set({ cart: [] }),

  cartTotal: () =>
    get().cart.reduce(
      (sum: number, cartItem: CartItem) =>
        sum + cartItem.unitPrice * cartItem.quantity,
      0
    ),

  totalItems: () =>
    get().cart.reduce(
      (sum: number, cartItem: CartItem) => sum + cartItem.quantity,
      0
    ),
}));

export default useCartStore;
