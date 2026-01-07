import { FilterIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return <>
  
  <header className="bg-red-500 flex justify-center gap-2 p-2 items-center">
    <Button className="rounded-lg ">Kickstart 2026 🔥</Button>
    <p className="text-white">Save 70% on all Products</p>
  </header>

  </>;
}
