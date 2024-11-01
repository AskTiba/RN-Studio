import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";
const Avatar = (props: SvgProps) => (
  <Svg width={73} height={72} viewBox="0 0 73 72" fill="none" {...props}>
    <Rect x={0.5} width={72} height={72} rx={36} fill="#4C4BF6" />
    <Path
      d="M36.5 16C30.9772 16 26.5 20.4772 26.5 26C26.5 31.5228 30.9772 36 36.5 36C42.0228 36 46.5 31.5228 46.5 26C46.5 20.4772 42.0228 16 36.5 16ZM24.7499 40C22.4033 40 20.5 41.9013 20.5 44.2489L20.5 45C20.5 48.7555 22.4417 51.5669 25.4202 53.3802C28.3491 55.1633 32.2861 56 36.5 56C40.7139 56 44.6509 55.1633 47.5798 53.3802C50.5583 51.5669 52.5 48.7555 52.5 45L52.5 44.2487C52.5 41.9011 50.5967 40 48.2502 40H24.7499Z"
      fill="white"
    />
  </Svg>
);
export default Avatar;
