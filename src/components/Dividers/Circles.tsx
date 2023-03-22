import classNames from "classnames";

export interface CirclesProps {
  className?: string;
}

export const Circles = ({ className = "", ...props }: CirclesProps) => {
  return (
    <div className={classNames(className)} {...props}>
      <svg width="650" height="50">
        <circle cx="20" cy="25" r="10" fill="#1abc9c" />
        <circle cx="70" cy="25" r="10" fill="#2ecc71" />
        <circle cx="120" cy="25" r="10" fill="#3498db" />
        <circle cx="170" cy="25" r="10" fill="#9b59b6" />
        <circle cx="220" cy="25" r="10" fill="#34495e" />
        <circle cx="270" cy="25" r="10" fill="#f1c40f" />
        <circle cx="320" cy="25" r="10" fill="#e67e22" />
        <circle cx="370" cy="25" r="10" fill="#e74c3c" />
        <circle cx="420" cy="25" r="10" fill="#95a5a6" />
        <circle cx="470" cy="25" r="10" fill="#f39c12" />
        <circle cx="520" cy="25" r="10" fill="#d35400" />
        <circle cx="570" cy="25" r="10" fill="#c0392b" />
        <circle cx="620" cy="25" r="10" fill="#bdc3c7" />
      </svg>
    </div>
  );
};
