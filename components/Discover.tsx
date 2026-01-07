import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlay, MoveLeft } from "lucide-react";
import Image from "next/image";

export default function Discover() {
  return (
    // <div className="text-center">
    <div className="text-center py-20">
      <div className="space-y-6">
        <Badge className="bg-[#DA2B35]">Discover Master Library</Badge>
        <h1 className="text-3xl md:text-5xl font-bold leading-14">
          Sell or use market-ready
          <br />
          <span className="text-[#DA2B35]">products under your name</span>
        </h1>
        <p className="w-md mx-auto">
          Skip the research, writing, designing, or costly outsourcing. Start
          using done-for-you content to grow your sales, audience, and authority
          in no time.
        </p>
        <Button size={"lg"} className="rounded-full">
          <CirclePlay /> <span className="text-lg">Watch Explainer Video</span>
        </Button>
      </div>
      <div className="w-8/12 rounded-xl  border-2 border-gray-300 mx-auto overflow-hidden mt-12">
        <video
          autoPlay
          muted
          src={"https://entrepedia-products.com/website/scrolling.mp4"}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-8/12 mx-auto gap-8 mt-8">
        <div className="flex flex-col justify-between text-left gap-3">
          <div className="bg-[#F2F2F2] p-3 rounded-xl h-1/2">
            <h2 className="text-xl ">Demanded Content</h2>
            <p className="text-foreground/50 text-sm">
              Best-selling topics that people really buy.
            </p>
          </div>

          <div className="bg-[#F2F2F2] p-3 rounded-xl h-1/2">
            <h2 className="text-xl ">Constantly Updated</h2>
            <p className="text-foreground/50 text-sm">
              We add 20 new products every week to meet the latest trends.
            </p>
          </div>
        </div>
        <div className="bg-[#DA2B35] text-white text-left p-3 relative overflow-hidden rounded-xl  lg:h-100">
          <h2 className="text-4xl mb-4">Private Label Rights</h2>
          <p className="text-sm">
            We add 20 new products every week to meet the latest trends.
          </p>
          <Image
            className="absolute -right-20 -bottom-16 opacity-50"
            width={300}
            height={300}
            src={"/images/5w0nynRBeqfiTZyL2l0uNcLs.avif"}
            alt="5w0nynRBeqfiTZyL2l0uNcLs.avif"
          />
        </div>

        <div className="bg-[#171717] text-white text-left p-3 relative overflow-hidden rounded-xl  flex flex-col justify-between">
          <p className="text-3xl">1000+</p>
          <div>
            <h2 className="text-3xl">Digital Products</h2>
            <p className="text-gray-300 text-sm">
              Almost unlimited selection of content in one of the biggest
              libraries out there.
            </p>
          </div>
          <Image
            className="absolute right-10 top-12 opacity-50"
            width={300}
            height={300}
            src={"/images/Nxl4C9zfpnnKFMy9f4p1cRbpeY.avif"}
            alt="Nxl4C9zfpnnKFMy9f4p1cRbpeY.avif"
          />
        </div>

        <div className="flex flex-col justify-between text-left gap-3">
          <div className="bg-[#F2F2F2] p-3 rounded-xl h-1/2">
            <h2 className="text-xl ">Demanded Content</h2>
            <p className="text-foreground/50 text-sm">
              Best-selling topics that people really buy.
            </p>
          </div>

          <div className="bg-[#F2F2F2] p-3 rounded-xl h-1/2">
            <h2 className="text-xl ">Constantly Updated</h2>
            <p className="text-foreground/50 text-sm">
              We add 20 new products every week to meet the latest trends.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 space-y-6">
        <Badge>You have complete freedom</Badge>
        <h1 className="text-3xl md:text-5xl font-bold leading-14">
          Unlimited options to
          <br />
          <span className="text-[#DA2B35]">use the resources</span>
        </h1>
        <Button className="hover:bg-[#e7222b] rounded-full bg-[#DA2B35] py-8 px-8 font-bold text-2xl">
          <span className="w-10 h-10">
            <MoveLeft />
          </span>
          Explore Master Library
        </Button>
      </div>
    </div>
  );
}
