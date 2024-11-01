import * as React from 'react';
import Svg, { Line, SvgProps } from 'react-native-svg';
const Filter = (prop: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-sliders-horizontal"
    {...prop}>
    <Line x1={21} x2={14} y1={4} y2={4} />
    <Line x1={10} x2={3} y1={4} y2={4} />
    <Line x1={21} x2={12} y1={12} y2={12} />
    <Line x1={8} x2={3} y1={12} y2={12} />
    <Line x1={21} x2={16} y1={20} y2={20} />
    <Line x1={12} x2={3} y1={20} y2={20} />
    <Line x1={14} x2={14} y1={2} y2={6} />
    <Line x1={8} x2={8} y1={10} y2={14} />
    <Line x1={16} x2={16} y1={18} y2={22} />
  </Svg>
);
export default Filter;
