import React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

interface GoodIconProps extends SvgIconProps {
  colour?: string;
}

const GoodIcon = (props: GoodIconProps) => (
  <SvgIcon viewBox="0 0 32 32" {...props}>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#37D7AB" />
      <path
        d="M24.32 16.64C24.32 20.8815 20.595 24.32 16 24.32C11.405 24.32 7.68 20.8815 7.68 16.64"
        stroke="white"
        strokeWidth="2.62921"
        strokeLinecap="square"
      />
      <circle cx="10.995" cy="11.315" r="1.315" fill="white" />
      <circle cx="20.995" cy="11.315" r="1.315" fill="white" />
    </svg>
  </SvgIcon>
);

export default GoodIcon;
