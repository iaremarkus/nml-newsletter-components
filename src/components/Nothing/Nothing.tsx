import { ReactComponent as Arrow } from "../../icons/arrow.svg";

export const Nothing = () => (
  <div className="flex flex-row items-center">
    <Arrow style={{ width: 200, height: 200 }} className="rotate-180" />
    <p className="relative pl-4 text-2xl" style={{ top: 15 }}>
      Please select a category to view
    </p>
  </div>
);
