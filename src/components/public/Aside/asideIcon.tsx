export default function AsideIcon({
  type,
  color,
}: {
  type: 'info' | 'warning' | 'danger' | 'success';
  color?: string;
}) {
  if (type === 'info') {
    return (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2296"
        width="32"
        height="32"
      >
        <path
          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
          p-id="2297"
          fill={color || '#4433ff'}
        ></path>
        <path
          d="M512 336m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"
          p-id="2298"
          fill={color || '#4433ff'}
        ></path>
        <path
          d="M536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
          p-id="2299"
          fill={color || '#4433ff'}
        ></path>
      </svg>
    );
  } else if (type === 'warning') {
    return (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        p-id="2313"
        width="32"
        height="32"
      >
        <path
          d="M934.4 770.133333L605.866667 181.333333C586.666667 147.2 550.4 128 512 128c-38.4 0-74.666667 21.333333-93.866667 53.333333L89.6 770.133333c-19.2 34.133333-19.2 76.8 0 110.933334S145.066667 938.666667 183.466667 938.666667h657.066666c38.4 0 74.666667-21.333333 93.866667-57.6 19.2-34.133333 19.2-76.8 0-110.933334z m-55.466667 81.066667c-8.533333 14.933333-23.466667 23.466667-38.4 23.466667H183.466667c-14.933333 0-29.866667-8.533333-38.4-23.466667-8.533333-14.933333-8.533333-34.133333 0-49.066667L473.6 213.333333c8.533333-12.8 23.466667-21.333333 38.4-21.333333s29.866667 8.533333 38.4 21.333333l328.533333 588.8c8.533333 14.933333 8.533333 32 0 49.066667z"
          fill={color || '#ff9d00'}
          p-id="2314"
        ></path>
        <path
          d="M512 746.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z"
          fill={color || '#ff9d00'}
          p-id="2315"
        ></path>
        <path
          d="M512 629.333333c17.066667 0 32-14.933333 32-32v-192c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v192c0 17.066667 14.933333 32 32 32z"
          fill={color || '#ff9d00'}
          p-id="2316"
        ></path>
      </svg>
    );
  } else if (type === 'danger') {
    return (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        p-id="2313"
        width="32"
        height="32"
      >
        <path
          d="M934.4 770.133333L605.866667 181.333333C586.666667 147.2 550.4 128 512 128c-38.4 0-74.666667 21.333333-93.866667 53.333333L89.6 770.133333c-19.2 34.133333-19.2 76.8 0 110.933334S145.066667 938.666667 183.466667 938.666667h657.066666c38.4 0 74.666667-21.333333 93.866667-57.6 19.2-34.133333 19.2-76.8 0-110.933334z m-55.466667 81.066667c-8.533333 14.933333-23.466667 23.466667-38.4 23.466667H183.466667c-14.933333 0-29.866667-8.533333-38.4-23.466667-8.533333-14.933333-8.533333-34.133333 0-49.066667L473.6 213.333333c8.533333-12.8 23.466667-21.333333 38.4-21.333333s29.866667 8.533333 38.4 21.333333l328.533333 588.8c8.533333 14.933333 8.533333 32 0 49.066667z"
          fill={color || '#ae221d'}
          p-id="2314"
        ></path>
        <path
          d="M512 746.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z"
          fill={color || '#ae221d'}
          p-id="2315"
        ></path>
        <path
          d="M512 629.333333c17.066667 0 32-14.933333 32-32v-192c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v192c0 17.066667 14.933333 32 32 32z"
          fill={color || '#ae221d'}
          p-id="2316"
        ></path>
      </svg>
    );
  } else if (type === 'success') {
    return (
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        p-id="4199"
        width="32"
        height="32"
      >
        <path
          d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z"
          fill={color || '#116526'}
          p-id="4200"
        ></path>
        <path
          d="M701.866667 381.866667L448 637.866667 322.133333 512c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l149.333334 149.333333c6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l277.333333-277.333333c12.8-12.8 12.8-32 0-44.8-14.933333-12.8-36.266667-12.8-49.066666-2.133333z"
          fill={color || '#116526'}
          p-id="4201"
        ></path>
      </svg>
    );
  }
  return <></>;
}