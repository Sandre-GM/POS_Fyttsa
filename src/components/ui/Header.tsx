import { ArrowLeft } from "lucide-react";

export default function Header() {
  return (
    <div className="flex bg-[#EFFA5D] gap-4 p-4 items-center">
      <a href="#" className="bg-black w-9 p-2 text-white rounded-l-md">
        <ArrowLeft />
      </a>

      <h1 className="text-2xl font-bold ">Ticker de Venta</h1>
    </div>
  );
}
