import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  groups: string[];
  groupState: [string | null, Dispatch<SetStateAction<string | null>>];
}

export const Sidebar = ({ groups, groupState }: SidebarProps) => {
  const [openGroup, setOpenGroup] = groupState;

  return (
    <div className="col-span-3 bg-purple-400 px-10 shadow-inner">
      <div className="sticky w-full top-0 pt-10 flex flex-col gap-4">
        {groups.map((group: string, index: number) => (
          <button
            key={`group-${index}`}
            className={classNames(
              "block w-full p-4 bg-purple-500 rounded shadow transition",
              "font-medium text-left text-white ",
              openGroup === group && "bg-purple-600 bg-opacity-80"
            )}
            onClick={() => {
              window.scrollTo(0, 0);
              setOpenGroup(group === openGroup ? null : group);
            }}
          >
            {group}
          </button>
        ))}
      </div>
    </div>
  );
};
