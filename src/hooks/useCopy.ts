import { useEffect, useRef, useState } from "react";

export const useCopy = () => {
  const signatureRef = useRef<HTMLDivElement>(null!);
  const [doneCopy, setDoneCopy] = useState<boolean>(false);

  // Show the confirmation message briefly
  useEffect(() => {
    setTimeout(() => setDoneCopy(false), 2000);
  }, [doneCopy]);

  const copyToClip = async (text: string) => {
    // const text = signatureRef.current.innerHTML;
    console.log("text", text);

    const blob = new Blob([text], { type: "text/html" });
    const richTextInput = new ClipboardItem({ "text/html": blob });
    navigator.clipboard.write([richTextInput]);

    setDoneCopy(true);
  };

  return { copyToClip, doneCopy, signatureRef };
};
