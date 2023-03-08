import classNames from "classnames";
import { ComponentObject } from "pages";
import { useRef } from "react";
import useClipboard from "react-use-clipboard";

export const Component = ({ title, component }: ComponentObject) => {
  const foo = useRef<HTMLDivElement>(null!);

  const [isCopied, setCopied] = useClipboard(foo.current?.innerHTML, {
    successDuration: 1000
  });

  return (
    <div className="compy">
      <div className={classNames("flex justify-between items-center mb-10", "rounded", "bg-slate-300 text-xs")}>
        <span style={{ top: 1 }} className="relative uppercase pl-2">
          {title} ↓
        </span>
        <button
          onClick={setCopied}
          className={classNames(
            "uppercase p-1 px-2 rounded text-white flex items-center gap-2 transition",
            isCopied ? "bg-green-600" : "bg-pink-900"
          )}
        >
          <span style={{ top: 1 }} className="relative">
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 569 569" fill="white">
            <path d="M284.667.604c-20.62 0-37.334 16.713-37.334 37.333v209.067H38.267c-20.62 0-37.334 16.713-37.334 37.333 0 20.62 16.714 37.334 37.334 37.334h209.066v209.066c0 20.62 16.714 37.334 37.334 37.334 20.62 0 37.333-16.714 37.333-37.334V321.671h209.067c20.62 0 37.333-16.714 37.333-37.334 0-20.62-16.713-37.333-37.333-37.333H322V37.937C322 17.317 305.287.604 284.667.604Z" />
          </svg>
        </button>
      </div>

      <div ref={foo}>{component}</div>
    </div>
  );
};
