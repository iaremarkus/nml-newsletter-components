import { ReactNode, useState } from "react";

import { Group, Nothing, Sidebar } from "components";
import { CenterQuote, CenterQuoteLeftPicture, CenterQuotePicture, LeftQuote, RightQuote } from "components/Callouts";
import { HeaderOverlaid, HeaderTextFirst, HeaderTextLast, HeaderTwoCol } from "components/Headers";
import {
  OneColumn,
  OneColumnColorful,
  OneColumnWithPictures,
  TwoColumn,
  TwoColumnColorful,
  TwoColumnColorfulWithPictures
} from "components/Posts";

export const ComponentTypes = ["Headers", "Posts", "Gallery", "Callout"] as const;
export type ComponentObject = { title: string; component: ReactNode };
export type ComponentGroup = Record<string, ComponentObject[]>;
export type ComponentType = (typeof ComponentTypes)[number];

export default function App() {
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
      { title: "Center Quote w/Picture", component: <CenterQuotePicture /> },
      { title: "Center Quote w/Left Picture", component: <CenterQuoteLeftPicture /> }
    ]
  };

  const groupState = useState<ComponentType | null>(null);
  const [openGroup] = groupState;

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Sidebar groupState={groupState} groups={[...ComponentTypes]} />

      <div className="col-span-9 bg-purple-100 p-10">
        {!openGroup && <Nothing />}

        <div className="mx-auto" style={{ maxWidth: 850 }}>
          {[...ComponentTypes].map((group: ComponentType, index) => (
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
