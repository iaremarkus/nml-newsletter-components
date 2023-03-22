import classNames from "classnames";

export interface CheckerboardProps {
  className?: string;
}

export const Checkerboard = ({ className = "", ...props }: CheckerboardProps) => {
  return (
    <div className={classNames(className)} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="650" height="50" viewBox="0 0 650 50">
        <rect x="0" y="0" width="25" height="25" fill="black" />
        <rect x="25" y="25" width="25" height="25" fill="black" />
        <rect x="50" y="0" width="25" height="25" fill="black" />
        <rect x="75" y="25" width="25" height="25" fill="black" />
        <rect x="100" y="0" width="25" height="25" fill="black" />
        <rect x="125" y="25" width="25" height="25" fill="black" />
        <rect x="150" y="0" width="25" height="25" fill="black" />
        <rect x="175" y="25" width="25" height="25" fill="black" />
        <rect x="200" y="0" width="25" height="25" fill="black" />
        <rect x="225" y="25" width="25" height="25" fill="black" />
        <rect x="250" y="0" width="25" height="25" fill="black" />
        <rect x="275" y="25" width="25" height="25" fill="black" />
        <rect x="300" y="0" width="25" height="25" fill="black" />
        <rect x="325" y="25" width="25" height="25" fill="black" />
        <rect x="350" y="0" width="25" height="25" fill="black" />
        <rect x="375" y="25" width="25" height="25" fill="black" />
        <rect x="400" y="0" width="25" height="25" fill="black" />
        <rect x="425" y="25" width="25" height="25" fill="black" />
        <rect x="450" y="0" width="25" height="25" fill="black" />
        <rect x="475" y="25" width="25" height="25" fill="black" />
        <rect x="500" y="0" width="25" height="25" fill="black" />
        <rect x="525" y="25" width="25" height="25" fill="black" />
        <rect x="550" y="0" width="25" height="25" fill="black" />
        <rect x="575" y="25" width="25" height="25" fill="black" />
        <rect x="600" y="0" width="25" height="25" fill="black" />
        <rect x="625" y="25" width="25" height="25" fill="black" />
      </svg>
    </div>
  );
};
