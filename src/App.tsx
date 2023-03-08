import { ReactNode, useState } from "react";

import { Group, Nothing, Sidebar } from "./components";

import {
  HeaderOverlaid,
  HeaderTextFirst,
  HeaderTextLast,
  HeaderTwoCol
} from "./components/Headers";

import {
  OneColumn,
  OneColumnColorful,
  OneColumnWithPictures,
  TwoColumn,
  TwoColumnColorful,
  TwoColumnColorfulWithPictures
} from "./components/Posts";

import {
  RightQuote,
  CenterQuote,
  LeftQuote,
  CenterQuotePicture
} from "./components/Callouts";

import "./styles.css";

export type ComponentObject = { title: string; component: ReactNode };
export type ComponentGroup = Record<string, ComponentObject[]>;

export default function App() {
  const groups = ["Headers", "Posts", "Gallery", "Callout"] as const;

  const components: ComponentGroup = {
    Headers: [
      { title: "Text Overlay", component: <HeaderOverlaid /> },
      { title: "Text First", component: <HeaderTextFirst /> },
      { title: "Text Last", component: <HeaderTextLast /> },
      { title: "Two Column", component: <HeaderTwoCol /> }
    ],
    Posts: [
      { title: "One Column", component: <OneColumn /> },
      { title: "One Column Colorful", component: <OneColumnColorful /> },
      { title: "One Column w/Pictures ", component: <OneColumnWithPictures /> },
      { title: "Two Column", component: <TwoColumn /> },
      { title: "Two Column Colorful", component: <TwoColumnColorful /> },
      {
        title: "Two Column Colorful w/Pictures",
        component: <TwoColumnColorfulWithPictures />
      }
    ],
    Gallery: [],
    Callout: [
      { title: "Right Quote", component: <RightQuote /> },
      { title: "Center Quote", component: <CenterQuote /> },
      { title: "Left Quote", component: <LeftQuote /> },
      { title: "Center Quote w/Picture", component: <CenterQuotePicture /> }
    ]
  };

  const groupState = useState<typeof groups[number] | null>(null);
  const [openGroup] = groupState;

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Sidebar groupState={groupState} groups={groups} />

      <div className="col-span-9 bg-purple-100 p-10">
        {!openGroup && <Nothing />}

        <div className="mx-auto" style={{ maxWidth: 850 }}>
          {groups.map((group: string, index) => (
            <Group
              key={`group-${index}`}
              title={group}
              isOpen={openGroup === group}
              className="flex flex-col gap-14"
              components={components[group]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
