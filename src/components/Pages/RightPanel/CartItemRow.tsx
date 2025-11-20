import { TicketPercent, Trash, Plus, Minus } from "lucide-react";
import type { CartItem, Product } from "../../../types";

type Props = {
  cartItem: CartItem;
  product?: Product;
  onIncrease: (item: CartItem) => void;
  onDecrease: (item: CartItem) => void;
  onRemove: (itemId: string) => void;
};

export default function CartItemRow({
  cartItem,
  product,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
  const itemSubtotal = cartItem.unitPrice * cartItem.quantity;

  return (
    <div className="flex items-center gap-4 p-3 border-b last:border-b-0">
      <div className="shrink-0">
        <img
          src={product?.image || `https://via.placeholder.com/72`}
          alt={product?.name || cartItem.productId}
          className="w-20 h-20 object-cover rounded border-[#6456FD] border-2"
        />
      </div>

      <div className="flex-1">
        <div className="text-sm font-medium text-gray-800">
          {product ? product.name : cartItem.productId}
        </div>
        <div className="mt-1 text-xs text-orange-500 font-semibold">
          {product ? product.clave : "-"}
        </div>
        <div className="mt-2 text-green-600 font-bold">
          {new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN",
          }).format(itemSubtotal)}
        </div>
      </div>

      <div className="flex flex-col items-end gap-3 ">
        <div className="flex items-center align-center gap-5">
          <button
            title="Etiqueta"
            className="w-9 h-9 bg-green-500 rounded flex items-center justify-center"
          >
            <TicketPercent className="w-5 h-5 text-white" />
          </button>

          <button
            title="Eliminar"
            onClick={() => onRemove(cartItem.id)}
            className="w-9 h-9 bg-red-500 rounded flex items-center justify-center"
          >
            <Trash className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onDecrease(cartItem)}
            className="w-8 h-8 bg-[#6456FD] hover:bg-indigo-600 text-white rounded-full flex items-center justify-center"
          >
            <Minus />
          </button>
          <div className="text-sm font-medium">{cartItem.quantity}</div>
          <button
            onClick={() => onIncrease(cartItem)}
            className="w-8 h-8 bg-[#6456FD] hover:bg-indigo-600 text-white rounded-full flex items-center justify-center"
          >
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
}
