import { ReactComponent as Poof } from "../../icons/poof.svg";

export const Empty = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center">
    <Poof
      style={{ width: 200, height: 200 }}
      className="opacity-20 rotate-180"
    />
    <p className="relative pl-4 text-2xl" style={{ top: 15 }}>
      Nothing found in the <strong className="text-purple-600">{title}</strong>{" "}
      category :-(
    </p>
  </div>
);
