import type { SVGProps } from "react";

const SvgCoronavirus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20.5 10.5v.75h-1.54a7 7 0 0 0-1.52-3.65l1.09-1.09.01.01.53.53 1.06-1.06-2.12-2.12-1.06 1.06.52.52-1.09 1.09a7 7 0 0 0-3.64-1.51V3.5h.76V2h-3v1.5h.74v1.54c-1.37.15-2.62.7-3.64 1.52L6.51 5.47l.01-.01.53-.53-1.06-1.06-2.12 2.12 1.06 1.06.52-.52 1.09 1.09a6.9 6.9 0 0 0-1.5 3.63H3.5v-.75H2v3h1.5v-.75h1.54c.15 1.37.69 2.61 1.5 3.63l-1.09 1.09-.52-.52-1.06 1.06 2.12 2.12 1.06-1.06-.53-.53-.01-.01 1.09-1.09c1.02.82 2.26 1.36 3.63 1.51v1.54h-.73V22h3v-1.5h-.76v-1.54c1.37-.14 2.62-.69 3.64-1.51l1.09 1.09-.52.52 1.06 1.06L20.13 18l-1.06-1.06-.53.53-.01.01-1.09-1.09a7.03 7.03 0 0 0 1.52-3.65h1.54v.75H22v-3h-1.5zM13.75 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-3.5 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M8.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m1.75-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
  </svg>
);

export { SvgCoronavirus };