/* eslint-disable @next/next/no-img-element */
import { usePictures } from "hooks";

export const HeaderTwoCol = () => {
  const { urls, setUrls } = usePictures(1);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2">
      <div className="w-full bg-slate-800 px-16 gap-2 flex justify-center items-start flex-col text-left">
        <h1 className="relative z-20 text-5xl font-bold text-white m-0" contentEditable>
          Welcome to the NML Newsletter
        </h1>
        <h2 className="relative z-20 text-xl font-bold text-rose-400 m-0" contentEditable>
          March 2023 Edition
        </h2>
      </div>

      <img
        src={urls[0]}
        className="object-cover h-full w-full z-10"
        alt="Foo"
        style={{ height: 400 }}
        onClick={() => setUrls({ 0: prompt("enter url") })}
      />
    </div>
  );
};
