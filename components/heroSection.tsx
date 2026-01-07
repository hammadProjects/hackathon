import { Avatarr } from "./avatar";

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
          You can instantly have your own ebooks, courses, and more to sell or{" "}
          <br />
          plug into your offers. Without high investments or months of creation.
        </p>
        {/* <BooksMarque /> */}
      </div>
    </>
  );
}
