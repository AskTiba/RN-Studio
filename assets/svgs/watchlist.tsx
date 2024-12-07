import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';
const Watchlist = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#543310"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-tv-minimal-play"
    {...props}>
    <Path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
    <Path d="M7 21h10" />
    <Rect width={20} height={14} x={2} y={3} rx={2} />
  </Svg>
);
export default Watchlist;
