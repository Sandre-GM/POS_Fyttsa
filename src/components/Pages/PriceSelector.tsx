import { useState } from "react";

const priceOptions = [
  { value: "publico", label: "Precio al público" },
  { value: "mayoreo", label: "Precio mayoreo" },
];

const clientOptions = [
  { value: "", label: "Busca un cliente" },
  { value: "cliente1", label: "Cliente 1" },
  { value: "cliente2", label: "Cliente 2" },
];

export default function PriceSelector() {
  const [priceType, setPriceType] = useState(priceOptions[0].value);
  const [client, setClient] = useState(clientOptions[0].value);

  return (
    <div className="flex gap-4 mb-4 w-full justify-between">
      <select
        className="px-4 py-2 rounded-lg border border-[#bcbafc] w-full bg-[#eaeaff] text-[#6456fd] text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bcbafc]"
        value={priceType}
        onChange={(e) => setPriceType(e.target.value)}
      >
        {priceOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <select
        className="px-4 py-2 px rounded-lg w-full border border-[#bcbafc] bg-[#eaeaff] text-[#bcbafc] text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bcbafc]"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      >
        {clientOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
