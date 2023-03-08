import { ComponentObject, ComponentType } from "pages";

import { Component, Empty } from "components";

interface GroupProps {
  title: ComponentType;
  isOpen: boolean;
  className?: string;
  components?: ComponentObject[];
}

export const Group = ({ title, isOpen = false, components, ...props }: GroupProps) => {
  if (!isOpen) return null;

  if (components && components.length > 0)
    return (
      <div {...props}>
        {components?.map((comp, index: number) => {
          return <Component key={`component-${index}`} {...comp} />;
        })}
      </div>
    );

  return <Empty title={title} />;
};
