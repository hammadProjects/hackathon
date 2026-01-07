/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/registry/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "book 3",
    img: "hF12zY12PMtZD11xgvMh8ez3I4.avif",
  },
  {
    name: "book 2",
    img: "pX3BLff8NWhSllGRgrIiIM2exE.avif",
  },
  {
    name: "book 1",
    img: "fFcfRq5ReDnP6JcPd5pRECcNWQ.avif",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

export default function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
        }}
      >
        <Marquee vertical className="[--duration:2s]">
          {firstRow.map(({ img, name }) => (
            <div key={name}>
              <Image src={img} width={400} height={400} alt={name} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
