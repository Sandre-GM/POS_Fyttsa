import type { ReactElement } from "react";
import useCartStore from "../../stores/useCartStore";
import type { CartItem, Product } from "../../types";
import CartItemRow from "./RightPanel/CartItemRow";
import CartSummary from "./RightPanel/CartSummary";
import PriceSelector from "./PriceSelector";

export default function RightPanel(): ReactElement {
  const cart = useCartStore((s) => s.cart);
  const products = useCartStore((s) => s.products);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const clearCart = useCartStore((s) => s.clearCart);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const cartTotal = useCartStore((s) => s.cartTotal);

  const findProduct = (productId: string): Product | undefined =>
    products.find((p) => p.id === productId);

  const handleIncrease = (cartItem: CartItem) => {
    const product = findProduct(cartItem.productId);
    if (!product) return;
    const desired = cartItem.quantity + 1;
    if (desired > product.stock) return;
    updateQuantity(cartItem.id, desired);
  };

  const handleDecrease = (cartItem: CartItem) => {
    const newQty = cartItem.quantity - 1;
    updateQuantity(cartItem.id, newQty);
  };

  return (
    <aside className="p-4 bg-white border-l border-gray-200 flex flex-col h-screen min-h-0">
      <PriceSelector />
      <header className="mb-4">
        <h2 className="text-lg font-semibold">Carrito</h2>
        <div className="text-sm text-gray-500">{cart.length} artículo(s)</div>
      </header>

      <div className="flex-1 min-h-0 overflow-y-auto space-y-3">
        {cart.length === 0 ? (
          <div className="text-sm text-gray-500">El carrito está vacío.</div>
        ) : (
          cart.map((cartItem) => {
            const product = findProduct(cartItem.productId);
            return (
              <CartItemRow
                key={cartItem.id}
                cartItem={cartItem}
                product={product}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={removeFromCart}
              />
            );
          })
        )}
      </div>

      <div className="sticky bottom-4 bg-white z-10 pt-2">
        <CartSummary total={cartTotal()} onClear={clearCart} />
      </div>
    </aside>
  );
}
