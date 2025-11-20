type Props = {
  total: number;
  onClear: () => void;
};

export default function CartSummary({ total, onClear }: Props) {
  return (
    <footer className="mt-4 border-t pt-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-gray-600">Total:</div>
        <div className="text-lg font-bold text-gray-800">
          {new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN",
          }).format(total)}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 px-3 py-2  border-2 text-red-400 border-red-400 hover:bg-red-400 hover:text-white rounded-full text-sm"
          onClick={() => onClear()}
        >
          Cancelar compra
        </button>

        <button
          type="button"
          className="flex-1 px-3 py-2 bg-[#6456FD] hover:bg-indigo-600 text-white rounded-full text-sm"
        >
          Cobrar
        </button>
      </div>
    </footer>
  );
}
