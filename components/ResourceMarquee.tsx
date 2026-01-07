/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/registry/magicui/marquee";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const reviews = [
  {
    name: "1",
    img: "/public/images/sr_graphics_long_logo_slogan.jpg",
  },
  {
    name: "2",
    img: "/public/images/pX3BLff8NWhSllGRgrIiIM2exE.avif",
  },
  {
    name: "3",
    img: "/public/images/fFcfRq5ReDnP6JcPd5pRECcNWQ.avif",
  },
  {
    name: "4",
    img: "/public/images/sr_graphics_long_logo_slogan.jpg",
  },
  {
    name: "5",
    img: "/public/images/pX3BLff8NWhSllGRgrIiIM2exE.avif",
  },
  {
    name: "6",
    img: "/public/images/fFcfRq5ReDnP6JcPd5pRECcNWQ.avif",
  },
  {
    name: "7",
    img: "/public/images/sr_graphics_long_logo_slogan.jpg",
  },
  {
    name: "8",
    img: "/public/images/pX3BLff8NWhSllGRgrIiIM2exE.avif",
  },
  {
    name: "9",
    img: "/public/images/fFcfRq5ReDnP6JcPd5pRECcNWQ.avif",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

export default function ResourcesMarquee() {
  return (
    <div className="w-8/12 mx-auto relative flex h-96 flex-row items-center justify-center gap-4 overflow-hidden">
      <div className="flex flex-row items-center gap-4">
        <Marquee className="[--duration:4s]">
          {firstRow.map(({ img, name }) => (
            <div key={name}>
              <Card>
                <CardContent>
                  <h2>Hello</h2>
                </CardContent>
              </Card>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
