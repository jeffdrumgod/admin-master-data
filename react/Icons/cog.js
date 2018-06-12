import React from 'react'

export default Cog = ({ fill, width, height }) => {
  return (
    <svg viewBox="0 0 32 32" width={width || "32"} height={height || "32"}>
        <path d="M30,13h-2.06c-0.752,0-1.464-0.432-1.788-1.223c-0.297-0.724-0.13-1.556,0.424-2.11l1.446-1.446 c0.391-0.391,0.391-1.024,0-1.414l-2.828-2.828c-0.391-0.391-1.024-0.391-1.414,0l-1.45,1.45c-0.533,0.533-1.347,0.733-2.129,0.41 C19.474,5.539,19,4.83,19,4.045V2c0-0.552-0.448-1-1-1h-4c-0.552,0-1,0.448-1,1v2.06c0,0.749-0.426,1.459-1.223,1.788 c-0.722,0.299-1.553,0.133-2.105-0.419l-1.45-1.45c-0.391-0.391-1.024-0.391-1.414,0L3.979,6.808c-0.391,0.391-0.391,1.024,0,1.414 l1.446,1.446c0.535,0.535,0.735,1.35,0.414,2.133C5.542,12.526,4.835,13,4.051,13H2c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1 h2.06c0.752,0,1.464,0.432,1.788,1.223c0.297,0.724,0.131,1.555-0.423,2.108l-1.447,1.447c-0.391,0.391-0.391,1.024,0,1.414 l2.828,2.828c0.391,0.391,1.024,0.391,1.414,0l1.457-1.457c0.525-0.525,1.321-0.732,2.132-0.399C12.53,26.461,13,27.162,13,27.94V30 c0,0.552,0.448,1,1,1h4c0.552,0,1-0.448,1-1v-2.06c0-0.752,0.432-1.464,1.223-1.788c0.724-0.297,1.555-0.131,2.108,0.423 l1.447,1.447c0.391,0.391,1.024,0.391,1.414,0l2.828-2.828c0.391-0.391,0.391-1.024,0-1.414l-1.457-1.457 c-0.525-0.525-0.732-1.32-0.399-2.132C26.461,19.47,27.162,19,27.94,19H30c0.552,0,1-0.448,1-1v-4C31,13.448,30.552,13,30,13z M16,21c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S18.757,21,16,21z"
        fill={fill || "#111"} />
    </svg>
  )
}