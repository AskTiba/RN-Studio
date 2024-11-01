import * as React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";
const Cirle = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-circle"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);
export default Cirle;
