import * as React from "react";
import Svg, { Path, Circle, SvgProps } from "react-native-svg";

// Extend SvgProps to accept a 'fillColor' prop for dynamic coloring
interface ProfileProps extends SvgProps {
  fillColor?: string; // Optional fillColor prop
}

const Profile: React.FC<ProfileProps> = ({
  fillColor = "#543310",
  ...props
}) => (
  <Svg width={30} height={30} viewBox="0 0 29 26" fill="none" {...props}>
    <Path
      d="M18.6293 15.9992C19.8713 15.9992 20.8782 17.0061 20.8782 18.2481V19.1665C20.8782 19.7399 20.6989 20.2989 20.3656 20.7654C18.8197 22.9287 16.2954 24.0004 12.8751 24.0004C9.45415 24.0004 6.93119 22.9282 5.38903 20.7639C5.05707 20.298 4.87866 19.7401 4.87866 19.1681V18.2481C4.87866 17.0061 5.88552 15.9992 7.12754 15.9992H18.6293ZM12.8751 4.00391C15.6365 4.00391 17.8751 6.24248 17.8751 9.00391C17.8751 11.7653 15.6365 14.0039 12.8751 14.0039C10.1137 14.0039 7.87512 11.7653 7.87512 9.00391C7.87512 6.24248 10.1137 4.00391 12.8751 4.00391Z"
      fill={'#543310'}
    />
    <Circle
      cx={21.875}
      cy={7}
      r={5}
      fill="transparent"
      stroke="transparent"
      strokeWidth={2}
    />
  </Svg>
);
export default Profile;
