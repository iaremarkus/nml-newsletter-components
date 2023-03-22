import classNames from "classnames";

export interface TrianglesProps {
  className?: string;
}

export const Triangles = ({ className = "", ...props }: TrianglesProps) => {
  return (
    <div className={classNames(className)} {...props}>
      <svg width="650" height="50">
        <polygon points="10,20 20,10 30,20" fill="#1abc9c" />
        <polygon points="110,30 120,20 130,30" fill="#2ecc71" />
        <polygon points="220,10 230,20 240,10" fill="#3498db" />
        <polygon points="340,30 330,20 340,10" fill="#9b59b6" />
        <polygon points="430,20 440,10 450,20" fill="#34495e" />
        <polygon points="560,10 550,20 560,30" fill="#f1c40f" />
      </svg>
    </div>
  );
};
