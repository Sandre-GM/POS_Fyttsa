import { useMemo, useState } from "react";
import clsx from "clsx";
import type { Product } from "../../types";
import { products as allProducts } from "../../services/productService";
import ProductListItem from "./ProductListItem";
import { Search } from "lucide-react";

export default function LeftPanel() {
  const [query, setQuery] = useState("");

  const filtered: Product[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.clave.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="p-4 flex flex-col gap-2 h-screen min-h-0">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

        <input
          className={clsx(
            "w-full pl-10 border rounded px-3 py-2 text-sm",
            query ? "border-primary" : "border-gray-300"
          )}
          placeholder="Buscar producto por nombre o clave..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto space-y-0 bg-white border border-gray-200 rounded shadow-sm p-4">
        {filtered.length === 0 ? (
          <div className="text-sm text-gray-500">
            Escribe en el buscador para ver productos.
          </div>
        ) : (
          filtered.map((product: Product) => (
            <ProductListItem key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}
