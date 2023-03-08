/* eslint-disable @next/next/no-img-element */
import { usePictures } from "hooks";

export const HeaderTextLast = () => {
  const { urls, setUrls } = usePictures(1);

  return (
    <div className="relative flex justify-end items-center flex-col">
      <img
        src={urls[0]}
        className="object-cover h-full w-full z-10"
        alt="Foo"
        style={{ height: 400 }}
        onClick={() => setUrls({ 0: prompt("enter url") })}
      />

      <div className="w-full bg-slate-800 px-4 py-14 gap-2 flex justify-end items-center flex-col text-center">
        <h1 className="relative z-20 text-5xl font-bold text-white m-0" contentEditable>
          Welcome to the NML Newsletter
        </h1>
        <h2 className="relative z-20 text-xl font-bold text-rose-400 m-0" contentEditable>
          March 2023 Edition
        </h2>
      </div>
    </div>
  );
};
