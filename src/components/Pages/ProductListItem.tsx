import type { Product } from "../../types";
import useCartStore from "../../stores/useCartStore";

type Props = {
  product: Product;
};

export default function ProductListItem({ product }: Props) {
  const priceFormatted = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(product.price);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div className="flex-1">
        <div className=" font-medium text-gray-800">{product.name}</div>

        <div className="mt-2 flex items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">Clave:</span>
            <span className="text-orange-500 font-semibold">
              {product.clave}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-gray-500">Stock:</span>
            <span className="text-blue-500 font-semibold">
              {product.stock.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-gray-500">Precio:</span>
            <span className="text-green-600 font-bold">{priceFormatted}</span>
          </div>
        </div>
      </div>

      <div className="w-32 flex justify-end">
        <button
          type="button"
          className="px-4 py-2 rounded-full bg-[#6456FD] hover:bg-indigo-600 text-white text-sm font-semibold shadow-sm"
          onClick={() => addToCart(product.id, 1)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
