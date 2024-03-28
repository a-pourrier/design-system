import type { SVGProps } from "react";

const SvgHeadsetOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M5 14h2v4H5zM16.83 14 19 16.17V14z" opacity={0.3} />
    <path d="M12 4c3.87 0 7 3.13 7 7v1h-4v.17L16.83 14H19v2.17l2 2V11a9 9 0 0 0-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.88 6.88 0 0 1 12 4M2.1 2.1.69 3.51l3.33 3.33A9 9 0 0 0 3 11v7c0 1.1.9 2 2 2h4v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h7c.34 0 .65-.09.93-.24l.55.55 1.41-1.41zM7 14v4H5v-4z" />
  </svg>
);

export { SvgHeadsetOff };