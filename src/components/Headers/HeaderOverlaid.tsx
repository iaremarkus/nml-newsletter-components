/* eslint-disable @next/next/no-img-element */
import { usePictures } from "hooks";

export const HeaderOverlaid = () => {
  const { urls, setUrls } = usePictures(1);

  return (
    <div style={{ height: 300 }} className="overflow-hidden relative flex justify-end items-end flex-col">
      <img
        src={urls[0]}
        className="object-cover h-full w-full absolute z-10"
        alt="Foo"
        onClick={() => setUrls({ 0: prompt("enter url") })}
      />

      <h1 className="relative z-20 p-2 text-3xl font-bold text-white mr-8 bg-slate-900 bg-opacity-50" contentEditable>
        Welcome to the NML Newsletter
      </h1>
      <h2
        className="relative z-20 p-2 text-sm font-bold text-white mr-8 mb-8 bg-pink-900 bg-opacity-80"
        contentEditable
      >
        March 2023 Edition
      </h2>
    </div>
  );
};
