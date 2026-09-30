'use client'

import { motion } from "motion/react";
import { useState } from "react"

interface RocketProps {
  className?: string,
  hover: string
}

export default function RocketSkeleton( {className, hover}: RocketProps ) {

  const [selected, select] = useState<string | null>(null);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox ={"0 0 300.305 70.832"}
      className={className}
    >

    <g>

      {
        //Dimensions
      }

      <g>
        <path
          d="M-26.973 128.42H237.51"
          style={{
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.265,
            strokeOpacity: 1
          }}
          transform="translate(41.091 -117.532)"
        />

        <path
          strokeWidth={0.265}
          d="M-30.987 133.004v43.798"
          style={{
            stroke: "#fff",
            strokeOpacity: 1
          }}
          transform="translate(41.091 -117.532)"
        />
      </g>

      


      <g
        style={{
          stroke: "#fff",
          strokeWidth: 0.6,
          strokeOpacity: 1,
        }}
      >
        <path
          d="M96.383 283.397 82.79 298.621l-.425 14.443 14.443-2.732zM114.75 283.397l13.593 15.224.425 14.443-14.443-2.732z"
          style={{
            fill: "red",
            stroke: "#fff",
            strokeWidth: 0.6,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
          transform="rotate(90 197.715 129.468)"
        />
      </g>
      <path
        d="M145.336-161.329h18.78V24.336h-18.78z"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.6,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        transform="rotate(90 79.312 -38.22)"
      />
      <path
        d="M147.951 4.56h13.801v19.046h-13.801z"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 0.6,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        transform="rotate(90 79.312 -38.22)"
      />
      <path
        d="M56.999 85.29c-.44-.745 4.458-9.414 5.324-9.422.866-.008 5.924 8.569 5.498 9.323-.426.754-10.383.846-10.822.1z"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 0.282795,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        transform="matrix(0 .99162 -4.53959 0 607.32 -24.692)"
      />
      <path
        d="M149.661-161.036h10.13v15.375h-10.13z"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 0.6,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        transform="rotate(90 79.312 -38.22)"
      />
      <path
        d="M51.145 156.915a.417.417 0 0 1-.288-.513.412.412 0 0 1 .244-.278l.064-.03 2.885-.005 2.886-.006.097-.028c.202-.058.331-.147.384-.264.025-.055.03-.088.03-.188 0-.108-.004-.13-.036-.195-.057-.118-.182-.2-.392-.26-.08-.023-.196-.025-2.47-.032-2.556-.008-2.41-.004-2.659-.07-.542-.14-.897-.471-1.016-.949a1.652 1.652 0 0 1-.005-.6c.036-.157.093-.292.174-.413.204-.305.53-.5.989-.593l.144-.03h5.828c6.092 0 5.885-.002 6.309.052 1.008.128 1.902.48 2.815 1.107.194.133.364.26.863.64.568.434.869.626 1.176.753.616.253 1.242.223 1.856-.089.286-.145.496-.29 1.191-.82.728-.555 1.062-.773 1.57-1.023.757-.372 1.528-.566 2.44-.614.176-.009 1.232-.012 3.181-.01l2.918.004.138.03c.635.134 1.015.457 1.15.975.037.143.041.454.008.604-.101.452-.423.787-.906.941a2.41 2.41 0 0 1-.23.06c-.06.012-.12.025-.135.03-.014.004-.75.01-1.638.015l-1.612.007-.102.03c-.291.083-.416.218-.416.45s.115.358.41.45l.095.029 4.066.003 4.066.003v-2.79h-.906c-.98 0-.993 0-1.1-.069a.423.423 0 0 1 .048-.735l.07-.034h4.62l.06.028a.423.423 0 0 1-.01.775l-.063.029-.937.004-.937.004v2.787l.937.004.937.004.064.03a.423.423 0 0 1 .01.775l-.06.027H79.072l-.144-.029c-.454-.092-.787-.29-.985-.588a1.193 1.193 0 0 1-.171-.395 1.563 1.563 0 0 1 0-.626c.036-.147.147-.373.234-.48.171-.208.422-.363.73-.453.276-.08.185-.076 1.941-.084 1.597-.007 1.607-.007 1.704-.035.188-.053.329-.145.386-.252.024-.045.028-.073.028-.2 0-.126-.004-.154-.028-.198a.55.55 0 0 0-.184-.18 1.218 1.218 0 0 0-.308-.094c-.07-.011-.894-.014-3.146-.01-3.033.005-3.053.005-3.263.032a5.243 5.243 0 0 0-1.695.49c-.38.184-.773.435-1.26.805-.867.657-.996.75-1.268.912a4.827 4.827 0 0 1-.62.298 2.823 2.823 0 0 1-1.024.177c-.518 0-.903-.094-1.406-.346-.322-.161-.59-.342-1.236-.837-.605-.462-.875-.65-1.209-.84-.652-.37-1.274-.57-2.069-.664-.157-.02-.35-.023-1.332-.027l-1.148-.005-.003 1.66-.004 1.662-.027.06a.479.479 0 0 1-.207.211.432.432 0 0 1-.348.003.39.39 0 0 1-.188-.161c-.069-.118-.067-.074-.068-1.818V153.3l-4.283.003-4.284.003-.094.029c-.198.061-.32.142-.376.252a.589.589 0 0 0-.01.367c.047.125.184.223.395.283l.098.028 2.387.007 2.386.007.154.034c.263.059.43.126.615.246.384.25.583.678.541 1.166-.051.61-.457 1.015-1.174 1.173l-.123.028-2.892.003c-2.265.002-2.904 0-2.95-.013zm14.331 0a.44.44 0 0 1-.272-.237.345.345 0 0 1-.027-.168c0-.141.032-.208.146-.316.153-.145 1.35-1.13 1.408-1.158.047-.024.079-.029.179-.029.103 0 .13.005.177.03.207.11.294.346.202.546a.565.565 0 0 1-.056.1 99.083 99.083 0 0 1-1.417 1.181.433.433 0 0 1-.34.051zm8.834.006a.554.554 0 0 1-.091-.037 51.289 51.289 0 0 1-1.427-1.165.425.425 0 0 1-.098-.443.454.454 0 0 1 .216-.234.442.442 0 0 1 .34-.006c.041.019.32.24.774.615.68.56.712.589.751.664.05.097.064.18.045.27a.426.426 0 0 1-.242.311.55.55 0 0 1-.268.025zm2.175-.011a.414.414 0 0 1-.266-.258c-.017-.053-.02-.212-.016-1.332l.003-1.273.03-.055a.444.444 0 0 1 .192-.19c.063-.032.088-.036.188-.036s.123.005.182.035a.445.445 0 0 1 .192.192l.035.067v2.56l-.03.066a.49.49 0 0 1-.216.211.44.44 0 0 1-.294.013zm-7.81-2.638a.448.448 0 0 1-.266-.231.328.328 0 0 1-.034-.173c0-.09.005-.113.043-.19.042-.085.043-.086.69-.618.41-.335.675-.544.72-.566a.435.435 0 0 1 .342-.002c.097.047 1.332 1.07 1.382 1.145a.426.426 0 0 1-.17.608.494.494 0 0 1-.353.003 9.32 9.32 0 0 1-.542-.426 7.048 7.048 0 0 0-.497-.391c-.008.003-.234.185-.501.404-.531.435-.554.45-.702.448a.531.531 0 0 1-.111-.011z"
        style={{
          fill: "white",
          stroke: "#fff",
          strokeWidth: 0.225308,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        transform="translate(41.091 -117.532)"
      />
      <g
        style={{
          stroke: "#fff",
          strokeOpacity: 1,
        }}
      >
        <path
          strokeWidth={0.265}
          markerEnd="url(#Arrow1Lend)"
          markerStart="url(#Arrow1Lstart)"
          d="M161.329 136.1h76.182"
          style={{
            stroke: "#fff",
            strokeOpacity: 1,
            markerStart: "url(#c)",
            markerEnd: "url(#marker162)",
          }}
          transform="translate(41.091 -115.532)"
        />
        <path
          strokeWidth={0.245}
          markerEnd="url(#Arrow1Lend)"
          markerStart="url(#Arrow1Lstart)"
          d="M242.046 144.775v16.102"
          style={{
            stroke: "#fff",
            strokeOpacity: 1,
            markerStart: "url(#d)",
            markerEnd: "url(#marker163)",
          }}
          transform="translate(41.091 -115.532)"
        />
        <text
          xmlSpace="preserve"
          x={92.022}
          y={124.45}
          style={{
            fontSize: "4.93889px",
            textAlign: "start",
            direction: "ltr",
            textAnchor: "start",
            fill: "#fafafa",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.264999,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(41.091 -115.532)"
        >
          <tspan
            x={92.022}
            y={124.45}
            style={{
              fontSize: "4.93889px",
              strokeWidth: 0.265,
            }}
          >
            {"85.9 cm"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          x={190.469}
          y={134.408}
          style={{
            fontSize: "4.93889px",
            textAlign: "start",
            direction: "ltr",
            textAnchor: "start",
            fill: "#fafafa",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.264999,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="translate(41.091 -115.532)"
        >
          <tspan
            x={190.469}
            y={134.408}
            style={{
              fontSize: "4.93889px",
              strokeWidth: 0.265,
            }}
          >
            {"25.0 cm"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          x={143.195}
          y={-245.262}
          style={{
            fontSize: "4.93889px",
            textAlign: "start",
            direction: "ltr",
            textAnchor: "start",
            fill: "#fafafa",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.264999,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(90 78.312 -37.22)"
        >
          <tspan
            x={143.195}
            y={-245.262}
            style={{
              fontSize: "4.93889px",
              strokeWidth: 0.265,
            }}
          >
            {"5.73 cm"}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          x={-163.881}
          y={-33.128}
          style={{
            fontSize: "4.93889px",
            textAlign: "start",
            direction: "ltr",
            textAnchor: "start",
            fill: "#fafafa",
            fillOpacity: 1,
            stroke: "#fff",
            strokeWidth: 0.264999,
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
          transform="rotate(-90 -37.22 -78.312)"
        >
          <tspan
            x={-163.881}
            y={-33.128}
            style={{
              fontSize: "4.93889px",
              strokeWidth: 0.265,
            }}
          >
            {"14.13 cm"}
          </tspan>
        </text>
      </g>
      <path
        d="M105.44 48.58s9.661 35.883 9.385 76.182h-18.77c-.275-40.3 9.386-76.182 9.386-76.182"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: 0.6,
          strokeDasharray: "none",
          strokeDashoffset: 0,
          strokeOpacity: 1,
        }}
        transform="matrix(0 -1 -1 0 327.182 142.629)"
      />
    </g>

    </motion.svg>
  );
}
