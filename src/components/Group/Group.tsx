import classNames from "classnames";
import { ComponentObject } from "../../App";
import { Empty } from "../Empty";
import { renderToString } from "react-dom/server";
import { createElement, ReactNode, useState } from "react";
import { useCopy } from "../../hooks";
import { ReactComponent as Plus } from "../../icons/plus.svg";

interface GroupProps {
  title: string;
  isOpen: boolean;
  className?: string;
  components?: ComponentObject[];
}

export const Group = ({
  title,
  isOpen = false,
  components,
  ...props
}: GroupProps) => {
  // const [html, setHtml] = useState<string | null>(null);
  const { copyToClip, doneCopy, signatureRef } = useCopy();

  const copyHtmlToClipboard = (component: any) => {
    const htmlString = renderToString(component);
    // setHtml(htmlString);
    copyToClip(htmlString);
  };

  if (!isOpen) return null;

  if (components && components.length > 0)
    return (
      <div {...props}>
        {components?.map(({ title, component }, index: number) => {
          return (
            <div className="compy" key={`group-${index}`}>
              <div
                className={classNames(
                  "flex justify-between items-center mb-10",
                  "rounded",
                  "bg-slate-300 text-xs"
                )}
              >
                <span style={{ top: 1 }} className="relative uppercase pl-2">
                  {title} ↓
                </span>
                <button
                  onClick={() => copyHtmlToClipboard(component)}
                  className={classNames(
                    "uppercase p-1 px-2 rounded text-white flex items-center gap-2 transition",
                    doneCopy ? "bg-green-600" : "bg-pink-900"
                  )}
                >
                  <span style={{ top: 1 }} className="relative">
                    {doneCopy ? "Copied!" : "Copy to clipboard"}
                  </span>
                  <Plus width="12" height="12" fill="white" />
                </button>
              </div>

              <div ref={signatureRef}>{component}</div>
            </div>
          );
        })}
      </div>
    );

  return <Empty title={title} />;
};
