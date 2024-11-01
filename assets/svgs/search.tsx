import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

// Extend SvgProps to accept a 'fillColor' prop for dynamic coloring
interface SearchProps extends SvgProps {
  fillColor?: string; // Optional fillColor prop
}

const Search: React.FC<SearchProps> = ({ fillColor = "#808080", ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={fillColor}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search"
    {...props}
  >
    <Circle cx={11} cy={11} r={8} />
    <Path d="m21 21-4.3-4.3" />
  </Svg>
);
export default Search;
