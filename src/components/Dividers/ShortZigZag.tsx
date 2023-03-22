import classNames from "classnames";

export interface ShortZigZagProps {
  className?: string;
}

export const ShortZigZag = ({ className = "", ...props }: ShortZigZagProps) => {
  return (
    <div className={classNames(className)} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="650" height="50" viewBox="0 0 650 50">
        <path
          d="M0 25l10 -10l10 10l10 -10l10 10l10 -10l10 10M40 5l10 10l10 -10l10 10l10 -10l10 10l10 -10M80 25l10 -10l10 10l10 -10l10 10l10 -10l10 10M120 5l10 10l10 -10l10 10l10 -10l10 10l10 -10M160 25l10 -10l10 10l10 -10l10 10l10 -10l10 10M200 5l10 10l10 -10l10 10l10 -10l10 10l10 -10M240 25l10 -10l10 10l10 -10l10 10l10 -10l10 10M280 5l10 10l10 -10l10 10l10 -10l10 10l10 -10M320 25l10 -10l10 10l10 -10l10 10l10 -10l10 10M360 5l10 10l10 -10l10 10l10 -10l10 10l10 -10M400 25l10 -10l10 10l10 -10l10 10l10 -10l10 10M440 5l10 10l10 -10l10 10l10 -10l10 10l10 -10M480 25l10 -10l10 10l10 -10l10 10l10 -10l10 10M520 5l10 10l10 -10l10 10l10 -10l10 10l10 -10M560 25l10 -10l10 10l10 -10l10 10l10 -10l10 10M600 5l10 10l10 -10l10 10l10 -10l10 10l10 -10"
          stroke="black"
          stroke-width="2"
          fill="none"
        />
      </svg>
    </div>
  );
};
