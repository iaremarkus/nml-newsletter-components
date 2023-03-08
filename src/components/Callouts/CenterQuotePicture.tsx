/* eslint-disable @next/next/no-img-element */
import { usePictures } from "hooks";

export const CenterQuotePicture = () => {
  const { urls, setUrls } = usePictures(1);

  return (
    <div className="relative text-center max-w-4xl mx-auto flex flex-col gap-4">
      <img
        src={urls[0]}
        alt="Pic of foobar"
        width="100%"
        style={{ maxHeight: 300 }}
        className="object-cover mb-4 mx-auto"
        onClick={() => setUrls({ 0: prompt("enter url") })}
      />

      <h2 className="text-4xl text-slate-600 font-medium" contentEditable>
        <i>Some fancy quote about the joys of working at NML on Tuesdays before 3pm</i>
      </h2>
      <h4 className="text-slate-500" contentEditable>
        - Ryan Barlow
      </h4>
    </div>
  );
};
