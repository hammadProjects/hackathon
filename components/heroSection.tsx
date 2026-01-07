import { Check, Search } from "lucide-react";
import { Avatarr } from "./avatar";
import { Input } from "./ui/input";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center gap-6">
        <Avatarr />
        <h1 className="text-white font-bold text-6xl">
          Done-for-you Infoproducts
        </h1>
        <h1 className="text-red-500 font-bold text-6xl">
          to Grow your Business
        </h1>
        <p className="text-gray-400">
          You can instantly have your own ebooks, courses, and more to sell or <br/>
          plug into your offers. Without high investments or months of creation.
        </p>
        <div className="flex gap-3">
          <p className="text-white flex gap-1"><Check className="bg-red-500 rounded-full text-white"/>Pre-Made Products</p>
          <p className="text-white flex gap-1"><Check className="bg-red-500 rounded-full text-white"/>Fully Custom Creation</p>
        </div>
        <div className="flex gap-2 bg-white rounded-full pl-3 pr-3">
          <Input placeholder="Find your next winning products" className="border-none"/>
          <Search className="bg-red-500 rounded-full text-4xl text-white p-1 mt-2" />
        </div>
      </div>
    </>
  );
}
