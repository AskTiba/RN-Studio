import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const AppleLogo = (props: SvgProps) => (
  <Svg width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
    <Path
      d="M18.75 10.8101C18.75 15.6401 14.8344 19.5601 10 19.5601C5.16562 19.5601 1.25 15.6401 1.25 10.8101C1.25 5.97568 5.16562 2.06006 10 2.06006C14.8344 2.06006 18.75 5.97568 18.75 10.8101Z"
      fill="#283544"
    />
    <Path
      d="M14.1013 8.59593C14.0536 8.62378 12.9169 9.21161 12.9169 10.515C12.9705 12.0014 14.3513 12.5226 14.375 12.5226C14.3513 12.5505 14.1665 13.2327 13.6192 13.9479C13.1848 14.5639 12.7026 15.1851 11.9705 15.1851C11.2741 15.1851 11.0241 14.7745 10.2205 14.7745C9.35752 14.7745 9.11334 15.1851 8.45262 15.1851C7.72048 15.1851 7.20262 14.5307 6.74455 13.9204C6.14944 13.1217 5.64361 11.8682 5.62575 10.6647C5.61372 10.027 5.74493 9.40008 6.07801 8.86759C6.54812 8.12421 7.3874 7.61958 8.30394 7.60294C9.0062 7.58088 9.6312 8.05223 10.0598 8.05223C10.4705 8.05223 11.2383 7.60294 12.1071 7.60294C12.4821 7.60331 13.4821 7.70857 14.1013 8.59593ZM10.0004 7.47561C9.87538 6.89321 10.2205 6.3108 10.5419 5.93929C10.9526 5.49001 11.6013 5.18506 12.1607 5.18506C12.1964 5.76746 11.9701 6.33865 11.5656 6.75466C11.2026 7.20394 10.5776 7.54217 10.0004 7.47561Z"
      fill="white"
    />
  </Svg>
);
export default AppleLogo;