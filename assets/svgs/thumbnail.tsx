import * as React from "react";
import Svg, { Rect, SvgProps } from "react-native-svg";
const Thumbnail = (props: SvgProps) => (
  <Svg width={101} height={100} viewBox="0 0 101 100" fill="none" {...props}>
    <Rect x={0.5} width={100} height={100} fill="black" fillOpacity={0.02} />
  </Svg>
);
export default Thumbnail;
