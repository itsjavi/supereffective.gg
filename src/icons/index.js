// src/TypeIcon/TypeIcon.tsx
import { pokemonTypesMap as pokemonTypesMap2 } from "@/lib/data-client/metadata";

// src/generated/Arrow.tsx
import "react";
import { jsx } from "react/jsx-runtime";
var SvgArrow = (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 32 16", ...props, children: /* @__PURE__ */ jsx("path", { d: "M16.7 15.3c-.4.4-1 .4-1.4 0L1.7 1.7c-.4-.4-.4-1 0-1.4.2-.2.4-.3.7-.3h27.2c.6 0 1 .4 1 1 0 .3-.1.5-.3.7z", className: "arrow_svg__st0" }) });
var Arrow_default = SvgArrow;

// src/generated/Ball.tsx
import "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var SvgBall = (props) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 780 780", ...props, children: [
  /* @__PURE__ */ jsx2("style", { children: ".ball_svg__st0{fill:#231815}.ball_svg__st2{fill:#fff}" }),
  /* @__PURE__ */ jsx2("circle", { cx: 390, cy: 390, r: 390, className: "ball_svg__st0" }),
  /* @__PURE__ */ jsx2("path", { d: "M45.4 390C45.4 199.7 199.7 45.4 390 45.4S734.6 199.7 734.6 390", style: {
    fill: "#e40b20"
  } }),
  /* @__PURE__ */ jsx2("path", { d: "M734.6 390c0 190.3-154.3 344.6-344.6 344.6S45.4 580.3 45.4 390", className: "ball_svg__st2" }),
  /* @__PURE__ */ jsx2("path", { d: "M23.5 362.1h733v55.7h-733z", className: "ball_svg__st0" }),
  /* @__PURE__ */ jsx2("circle", { cx: 390, cy: 390, r: 167.2, className: "ball_svg__st0" }),
  /* @__PURE__ */ jsx2("circle", { cx: 390, cy: 390, r: 114, className: "ball_svg__st2" })
] });
var Ball_default = SvgBall;

// src/generated/Teratype.tsx
import "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var SvgTeratype = (props) => /* @__PURE__ */ jsx3("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "12.5 0 225 250", ...props, children: /* @__PURE__ */ jsx3("path", { d: "M124.1.34c-.92.67-12.33 21.56-12.4 21.7-3.6 6.63-4.42 7.3-6.17 8.46-1.36.9-38.95 20.95-43.21 23.09-5.32 2.67-6.3 2.93-9.59 2.51-1.36-.17-34.22-4.01-36.6-4.01-4.82-.01-4.82 1.17.04 10.62 2.05 3.98 17.43 36.28 17.43 36.28l.23 53.23S14.49 192 13.9 193.15c-2.78 5.4-1.55 6.89 4.91 5.95 3.92-.57 31.94-3.74 33.27-3.89 4.76-.53 5.18-.43 10.17 2.42 1.57.9 42.98 22.24 43.58 22.53 1.75.84 2.25 1.53 5.89 8.23 1.26 2.32 11.27 20.04 11.95 20.83 1.5 1.75 2.58.54 4.8-3.48.92-1.64 11.2-20.73 11.47-21.27 1.73-3.5 2.26-4.07 5.03-5.5 1.46-.76 38.45-19.94 42.71-22.08 5.32-2.67 6.3-2.93 9.59-2.51 1.36.17 34.22 4 36.6 4.01 4.82.01 4.82-1.18-.04-10.62a4431.42 4431.42 0 0 1-17.43-36.28l-.23-53.24s19.34-39.77 19.93-40.92c2.78-5.4 1.55-6.89-4.91-5.95-3.92.57-31.94 3.74-33.27 3.89-4.76.53-5.18.43-10.17-2.42-1.57-.9-42.98-22.24-43.58-22.53-1.75-.84-2.25-1.54-5.89-8.23-1.9-3.5-11.25-20.67-12.14-21.61-.55-.58-1.37-.64-2.05-.14Z" }) });
var Teratype_default = SvgTeratype;

// src/utils.ts
function cn(...args) {
  return args.filter(Boolean).map((c) => String(c).trim()).join(" ").trim();
}

// src/TypeIcon/cva.tsx
function typeIconGlyphRecipe(_) {
  return "pkm-type-glyph";
}
function typeTeraIconBgRecipe(_) {
  return "pkm-type-teraglyph";
}
function typeIconRecipe(params) {
  return baseIconRecipe("pkm-type", params);
}
function baseIconRecipe(baseName, params) {
  const classNames = [];
  if (params.colored) {
    classNames.push(`${baseName}--colored`);
  } else {
    classNames.push(`${baseName}--not-colored`);
  }
  if (params.filled) {
    classNames.push(`${baseName}--filled`);
  } else {
    classNames.push(`${baseName}--not-filled`);
  }
  if (params.terastal) {
    classNames.push(`${baseName}--tera`);
  } else {
    classNames.push(`${baseName}--not-tera`);
  }
  if (params.rounded) {
    classNames.push(`${baseName}--rounded`);
  } else {
    classNames.push(`${baseName}--not-rounded`);
  }
  if (params.size) {
    classNames.push(`${baseName}--size-${params.size}`);
  } else {
    classNames.push(`${baseName}--size-default`);
  }
  classNames.push(`${baseName}--theme-${params.theme ?? "dark"}`);
  classNames.push(`${baseName}-${params.typeId}`);
  return cn(baseName, ...classNames);
}

// src/TypeIcon/svgComponents.tsx
import { pokemonTypesMap } from "@/lib/data-client/metadata";

// src/generated/types/BugType.tsx
import "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var SvgBugType = (props) => /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx4("path", { fillRule: "nonzero", d: "M38.35 28.23c8.1 0 15.19-3.44 19.07-8.57-3.88-6.28-10.97-10.49-19.07-10.49s-15.19 4.21-19.07 10.49c3.88 5.13 10.97 8.57 19.07 8.57m22.84-4.26c-4.56 5.02-11.7 8.47-19.88 9.14l10.93 34.42c8.67-5.52 14.42-15.13 14.42-26.08 0-6.49-2.02-12.5-5.47-17.48zm-45.67 0c4.56 5.02 11.7 8.47 19.88 9.14L24.47 67.53C15.8 62.01 10.05 52.4 10.05 41.45c0-6.49 2.02-12.5 5.47-17.48zm22.83 30.75c1.66 0 3.31-.37 4.83-1.09l-1.3-4.74a6.562 6.562 0 0 1-7.07 0l-1.3 4.74c1.53.72 3.18 1.09 4.83 1.09zm0 9.14c2.53 0 4.98-.48 7.27-1.36l-1.33-4.85c-1.85.79-3.86 1.21-5.94 1.21s-4.08-.42-5.94-1.21l-1.33 4.85c2.29.88 4.74 1.36 7.27 1.36" }) });
var BugType_default = SvgBugType;

// src/generated/types/DarkType.tsx
import "react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var SvgDarkType = (props) => /* @__PURE__ */ jsx5("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsxs2("g", { fillRule: "nonzero", children: [
  /* @__PURE__ */ jsx5("path", { d: "M60.1 20.73s-3.25 4.41-10.78 6.74c.84 2.28 1.32 4.93 1.32 7.9 0 10.15-5.5 18.39-12.28 18.39s-12.28-7.27-12.28-18.39c0-2.95.58-5.58 1.52-7.84-7.67-2.32-10.98-6.8-10.98-6.8s-7.54 8.04-6.83 17.19c.42 5.33 3.3 11.6 10.35 17.38 0 0 7.54 6.66 18.22 6.66s18.22-6.66 18.22-6.66c7.05-5.78 9.93-12.04 10.35-17.38.72-9.15-6.83-17.19-6.83-17.19z" }),
  /* @__PURE__ */ jsx5("path", { d: "M35.54 28.85c-.96 2-1.58 4.89-1.58 7.72 0 5.08 1.97 9.19 4.39 9.19s4.39-4.12 4.39-9.19c0-2.84-.61-5.73-1.58-7.72-.9.04-1.84.05-2.81.02-.97.03-1.91.02-2.81-.02" })
] }) });
var DarkType_default = SvgDarkType;

// src/generated/types/DragonType.tsx
import "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var SvgDragonType = (props) => /* @__PURE__ */ jsx6("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx6("path", { fillRule: "nonzero", d: "M12.39 23.98c-8.41 11.05-7.23 26.81 3.02 36.47 1.09-3.6 3.14-6.95 6.1-9.6a20.915 20.915 0 0 1-4.04-10.48c-5.13-3.92-7-10.56-5.08-16.4zm51.92 0c1.92 5.84.05 12.48-5.08 16.4-.38 3.88-1.82 7.47-4.04 10.48 2.96 2.65 5.01 5.99 6.1 9.6 10.25-9.65 11.43-25.42 3.02-36.47zm-12.95 1.33c-1.12-7.41-3.63-15.73-4.89-19.64-.22-.68-1.26-.66-1.44.03-1.17 4.28-2.6 11.09-3.24 14.2-1.07-.2-2.29-.32-3.42-.32s-2.35.11-3.42.32c-.64-3.11-2.07-9.91-3.24-14.2-.19-.69-1.22-.72-1.44-.03-1.26 3.91-3.78 12.22-4.89 19.64-2.67 2.99-4.3 6.93-4.3 11.33 0 6.35 3.37 13.85 8.39 18.21l1.38 12.27c0 1.8 3.37 4.41 7.53 4.41s7.53-2.62 7.53-4.41l1.38-12.27c5.02-4.36 8.39-11.86 8.39-18.21 0-4.4-1.63-8.34-4.3-11.33zM29.81 48.82c-2.98-.92-5.06-3.61-5.15-6.73-.12-3.67.07-7.59.07-7.59l9.2 15.41c-1.61-.37-2.97-.74-4.12-1.09zm17.1 0c-1.14.35-2.51.73-4.12 1.09l9.2-15.41s.19 3.92.07 7.59a7.3 7.3 0 0 1-5.15 6.73z" }) });
var DragonType_default = SvgDragonType;

// src/generated/types/ElectricType.tsx
import "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var SvgElectricType = (props) => /* @__PURE__ */ jsx7("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx7("path", { fillRule: "nonzero", d: "M37.97 6.94c2.5 1.14 12.84 6.04 19.84 12.22.31.27.34.75.07 1.06-1.55 1.8-6.66 7.75-12.82 14.99-.27.32-.24.8.07 1.08 1.8 1.59 7.48 6.69 10.91 10.43.28.3.26.77-.04 1.06-2.98 2.87-17.73 17.06-23.45 21.97-.3.26-.76-.02-.67-.41.74-3.02 2.8-11.05 4.99-16.89.12-.31.02-.66-.25-.86-2.15-1.64-11.56-8.86-17.74-14.4a.749.749 0 0 1-.16-.91c1.36-2.62 7.8-14.72 18.32-29.07.21-.29.6-.4.92-.25z" }) });
var ElectricType_default = SvgElectricType;

// src/generated/types/FairyType.tsx
import "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var SvgFairyType = (props) => /* @__PURE__ */ jsx8("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx8("path", { fillRule: "nonzero", d: "M66.36 12.08c-2.18-2.18-15.61-3.16-24.65 5.88-1.55 1.55-2.63 3.4-3.25 5.35-.62-1.96-1.7-3.8-3.25-5.35-9.04-9.04-22.47-8.06-24.65-5.88S7.4 27.69 16.44 36.73c1.91 1.91 4.26 3.11 6.73 3.61-5 4.33-5.57 11.18-4.61 12.52 1.02 1.42 8.4 3.21 14.31-.94-.27.79-.53 1.6-.79 2.44-2.47 8.08-3.39 14.96-2.07 15.36 1.33.41 4.41-5.81 6.88-13.89.62-2.03 1.15-3.99 1.56-5.79.41 1.8.94 3.76 1.56 5.79 2.47 8.08 5.55 14.3 6.88 13.89s.4-7.29-2.07-15.36c-.26-.84-.52-1.65-.79-2.44 5.91 4.15 13.3 2.36 14.31.94.96-1.34.39-8.18-4.61-12.52 2.47-.5 4.82-1.7 6.73-3.61 9.04-9.04 8.06-22.47 5.88-24.65zm-27.9 28.05c-4.31 0-8.04-2.45-9.9-6.03 5.01-.02 9.15-3.74 9.81-8.57.02-.12.17-.12.18 0 .66 4.83 4.8 8.56 9.81 8.57-1.86 3.58-5.59 6.03-9.9 6.03z" }) });
var FairyType_default = SvgFairyType;

// src/generated/types/FightingType.tsx
import "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var SvgFightingType = (props) => /* @__PURE__ */ jsx9("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx9("path", { fillRule: "nonzero", d: "M40.72 34.03h21.8v9.88h-21.8zm13.33-22v17.66h8.47V12.03zm-4.86 0h-8.47v17.66h8.47zm-13.2 0h-8.47v23.22h8.47zm-13.33 0h-8.47v23.22h8.47zm14.03 31.43h-22.5v12.97l14.41 9.42 33.92-10.46v-7.38H36.69z" }) });
var FightingType_default = SvgFightingType;

// src/generated/types/FireType.tsx
import "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var SvgFireType = (props) => /* @__PURE__ */ jsx10("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx10("path", { fillRule: "nonzero", d: "M54.245 38.173c-5.32-5.15-3.66-9.14-1.21-11.26 0 0-6.53-.79-8.85 4.53-2.33 5.32 2.16 8.06 2.16 8.06s-6.48-2.58-4.66-8.9c1.61-5.56 4.57-8.48 3.24-14.38-1.5-6.67-10.97-9.49-15.55-7.74 3.2 1.08 5.51 4.09 5.51 7.66 0 4.16-3.29 6.92-7.71 11.39-5.11 5.15-10.32 10.97-10.32 20.31 0 10.78 6.65 17.45 14.62 19.87-4.04-1.93-12.45-7.99-11.4-19.65 1.1-12.3 12.89-20.7 12.89-20.7s-2.54 4.26-1.43 11.16c.62 3.88 3.4 8.65 6.05 10.72 3.72 2.91 8.64 5.93 7.93 11.45-.67 5.18-7.55 7.5-11.02 7.71 1.58.26 3.19.37 4.78.32 11.81 0 20.58-8.78 20.58-18.12 0-7.39-3.54-10.43-5.62-12.43z" }) });
var FireType_default = SvgFireType;

// src/generated/types/FlyingType.tsx
import "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var SvgFlyingType = (props) => /* @__PURE__ */ jsx11("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx11("path", { fillRule: "nonzero", d: "M23.78 27.7c-1.94 4.43-7.5 23.12-8.81 33.15-.67 5.09-1.31 6.86 0 7.25 1.66.5 8.65-10.31 11.14-14.47 0 0 15.92 2.39 24.09-7.79.19-.24-.02-.59-.32-.53-3.22.55-14.81 2.34-19.94.35 0 0 20.89.81 30.38-14.67.13-.2-.08-.46-.3-.38-3.29 1.19-17.5 5.86-26.01 3.66 0 0 13.83-.81 24.28-10.31S69.6 9.66 68.85 8.91c-1.42-1.42-8.65 2.16-14.47 3.99s-13.14 3.99-17.96 4.99-8.81 1.08-12.64 9.81z" }) });
var FlyingType_default = SvgFlyingType;

// src/generated/types/GhostType.tsx
import "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var SvgGhostType = (props) => /* @__PURE__ */ jsx12("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx12("path", { fillRule: "nonzero", d: "M64.73 37.52c-2.45-.58-4.47.48-5.75 1.48.49-2.06.77-4.09.77-6.02 0-11.82-9.58-21.4-21.4-21.4s-21.4 9.58-21.4 21.4c0 1.93.28 3.96.77 6.02-1.28-.99-3.31-2.06-5.75-1.48-3.51.83-6.4 5.88-6.57 10.24-.03.9 1.07 1.36 1.67.69.97-1.09 2.24-2.21 3.12-1.84 2.88 1.22 3.1 6.32 5.87 6.32 2.43 0 4.52-2.43 5.54-3.86 4.66 8.79 11.84 16.06 16.74 16.06s12.07-7.26 16.74-16.06c1.02 1.43 3.11 3.86 5.54 3.86 2.77 0 2.99-5.1 5.87-6.32.88-.37 2.15.74 3.12 1.84.6.67 1.71.21 1.67-.69-.17-4.36-3.06-9.41-6.57-10.24zm-31.59-2.74c-1.78.83-4.48-1.18-6.03-4.5s-1.35-6.68.43-7.51 4.48 1.18 6.03 4.5 1.36 6.68-.43 7.51m16.45-4.5c-1.55 3.32-4.25 5.33-6.03 4.5s-1.98-4.2-.43-7.51c1.55-3.32 4.25-5.33 6.03-4.5s1.98 4.2.43 7.51" }) });
var GhostType_default = SvgGhostType;

// src/generated/types/GrassType.tsx
import "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var SvgGrassType = (props) => /* @__PURE__ */ jsx13("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx13("path", { fillRule: "nonzero", d: "M11.602 66.205h17.63s4.82-44.39 2.33-44.39-19.96 44.39-19.96 44.39zm29.6 0h17.62s8.31-44.39 5.82-44.39-23.44 44.39-23.44 44.39zm-5.99 0 12.8-25.44s4.66-30.26 2.49-30.26-13.14 26.94-13.14 26.94l-2.16 28.76z" }) });
var GrassType_default = SvgGrassType;

// src/generated/types/GroundType.tsx
import "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var SvgGroundType = (props) => /* @__PURE__ */ jsx14("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx14("path", { fillRule: "nonzero", d: "m67.52 52.645-29.17 11.78-29.16-11.78-1.47 3.64 30.63 12.38 30.64-12.38zm-.08-5.31v-2.11l-29.09-11.61-29.09 11.61v2.11l29.09 11.6zm-39.59-25.65h6.48v6.48h-6.48zm24.44-6.49h8.31v8.31h-8.31zm-38.74-7.15h10.81v10.81H13.55z" }) });
var GroundType_default = SvgGroundType;

// src/generated/types/IceType.tsx
import "react";
import { jsx as jsx15 } from "react/jsx-runtime";
var SvgIceType = (props) => /* @__PURE__ */ jsx15("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx15("g", { fillRule: "nonzero", children: /* @__PURE__ */ jsx15("path", { d: "m31.398 11.737 6.951-6.951 6.95 6.95-6.95 6.951zM11.49 48.24h9.83v9.83h-9.83zM31.397 64.966l6.951-6.95 6.951 6.95-6.95 6.951zM55.38 18.75v9.77l-17.03-9.83-17.03 9.83v-9.77h-9.83v9.83h9.83v19.6l17.03 9.83 17.03-9.83v-19.6h9.83v-9.83zM31.14 34.32v9.62h-5.11v-12.6h.05l10.86-6.27 2.55 4.42-8.36 4.83zm24.24 13.92h9.83v9.83h-9.83z" }) }) });
var IceType_default = SvgIceType;

// src/generated/types/NormalType.tsx
import "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var SvgNormalType = (props) => /* @__PURE__ */ jsx16("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx16("path", { fillRule: "nonzero", d: "M63.81 26.43c3.12-4.29 2.43-10.33-1.69-13.79-4-3.36-9.82-3.11-13.54.39-3.18-1.21-6.63-1.88-10.23-1.88s-7.05.67-10.23 1.88c-3.71-3.5-9.53-3.74-13.54-.39-4.13 3.46-4.81 9.49-1.69 13.79-2.17 4.05-3.4 8.67-3.4 13.58 0 15.91 12.95 28.86 28.86 28.86s28.86-12.95 28.86-28.86c0-4.91-1.23-9.53-3.4-13.58zM38.35 60.87c-11.5 0-20.86-9.36-20.86-20.86s9.36-20.86 20.86-20.86 20.86 9.36 20.86 20.86-9.36 20.86-20.86 20.86" }) });
var NormalType_default = SvgNormalType;

// src/generated/types/PoisonType.tsx
import "react";
import { jsx as jsx17, jsxs as jsxs3 } from "react/jsx-runtime";
var SvgPoisonType = (props) => /* @__PURE__ */ jsx17("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsxs3("g", { transform: "translate(.005)", children: [
  /* @__PURE__ */ jsx17("path", { fillRule: "nonzero", d: "M47.7 56.75c-.55-4.68-4.52-8.31-9.35-8.31s-8.8 3.63-9.35 8.31c-11.51.84-19.8 3.18-19.8 5.93 0 3.46 13.05 6.26 29.15 6.26s29.15-2.8 29.15-6.26c0-2.76-8.29-5.09-19.8-5.93" }),
  /* @__PURE__ */ jsx17("circle", { cx: 28.31, cy: 23.22, r: 11.2 }),
  /* @__PURE__ */ jsx17("circle", { cx: 51.28, cy: 37.57, r: 6.64 })
] }) });
var PoisonType_default = SvgPoisonType;

// src/generated/types/PsychicType.tsx
import "react";
import { jsx as jsx18 } from "react/jsx-runtime";
var SvgPsychicType = (props) => /* @__PURE__ */ jsx18("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx18("path", { fillRule: "nonzero", d: "M38.35 16.28c.29 0 .59.16.72.48 2.62 6.29 8.79 10.32 15.47 10.32.71 0 1.43-.05 2.15-.14h.11c.63 0 1.01.73.61 1.26-4.58 5.98-4.58 14.34-.02 20.33.4.52.01 1.25-.61 1.25h-.11c-.72-.09-1.43-.14-2.14-.14-6.68 0-12.85 4.02-15.47 10.32-.13.32-.43.48-.72.48s-.59-.16-.72-.48C35 53.67 28.83 49.64 22.15 49.64c-.71 0-1.43.05-2.15.14h-.11c-.63 0-1.01-.73-.61-1.26 4.58-5.98 4.58-14.34.02-20.33-.4-.52-.01-1.25.61-1.25h.11c.72.09 1.43.14 2.14.14 6.68 0 12.85-4.02 15.47-10.32.13-.32.43-.48.72-.48m0-8.7c-3.84 0-7.28 2.29-8.75 5.84-1.23 2.96-4.22 4.96-7.44 4.96-.34 0-.68-.02-1.02-.07-.4-.05-.81-.08-1.22-.08-3.62 0-6.88 2.02-8.49 5.27a9.433 9.433 0 0 0 .95 9.95c2.19 2.88 2.19 6.9 0 9.77a9.43 9.43 0 0 0-.97 9.96 9.42 9.42 0 0 0 8.49 5.28c.41 0 .82-.03 1.23-.08.34-.04.69-.07 1.03-.07 3.22 0 6.21 1.99 7.44 4.96 1.48 3.55 4.91 5.84 8.75 5.84s7.28-2.29 8.75-5.84c1.23-2.96 4.22-4.96 7.44-4.96.34 0 .68.02 1.02.07.4.05.81.08 1.22.08 3.62 0 6.88-2.02 8.49-5.27a9.433 9.433 0 0 0-.95-9.95c-2.19-2.88-2.19-6.9 0-9.77 2.21-2.89 2.58-6.7.97-9.96a9.42 9.42 0 0 0-8.49-5.28c-.41 0-.82.03-1.23.08-.34.04-.69.07-1.03.07-3.22 0-6.21-1.99-7.44-4.96a9.459 9.459 0 0 0-8.75-5.84z" }) });
var PsychicType_default = SvgPsychicType;

// src/generated/types/RockType.tsx
import "react";
import { jsx as jsx19 } from "react/jsx-runtime";
var SvgRockType = (props) => /* @__PURE__ */ jsx19("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx19("path", { fillRule: "nonzero", d: "m58.71 18 2.67 11.72-14.39-14.39zl-8.43-8.43H26.43L9.57 26.43v23.85l8.23 8.23-4.49-19.72L37.52 63 17.8 58.51l8.63 8.63h23.85l8.43-8.43-19.72 4.49L63.2 38.99l-4.49 19.72 8.43-8.43V26.43z" }) });
var RockType_default = SvgRockType;

// src/generated/types/SteelType.tsx
import "react";
import { jsx as jsx20, jsxs as jsxs4 } from "react/jsx-runtime";
var SvgSteelType = (props) => /* @__PURE__ */ jsx20("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsxs4("g", { fillRule: "nonzero", children: [
  /* @__PURE__ */ jsx20("path", { d: "m41 27.35 9.18 32.02 17.37-12.62-8.03-24.71zM52.3 37.6c-2.52 0-4.56-2.04-4.56-4.56s2.04-4.56 4.56-4.56 4.56 2.04 4.56 4.56-2.04 4.56-4.56 4.56" }),
  /* @__PURE__ */ jsx20("path", { d: "m37.9 38.21-4.29-14.95 24.07-6.9-1.28-3.93H20.3L9.15 46.75zM26.03 15.23c1.87 0 3.38 1.51 3.38 3.38s-1.51 3.38-3.38 3.38-3.38-1.51-3.38-3.38 1.51-3.38 3.38-3.38m13.01 26.95-25.69 7.63 25 18.17 6.69-4.87z" })
] }) });
var SteelType_default = SvgSteelType;

// src/generated/types/WaterType.tsx
import "react";
import { jsx as jsx21 } from "react/jsx-runtime";
var SvgWaterType = (props) => /* @__PURE__ */ jsx21("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, clipRule: "evenodd", viewBox: "0 0 77 77", ...props, children: /* @__PURE__ */ jsx21("path", { fillRule: "nonzero", d: "M54 41.57s-3.96-6.86-5.85-9.78c-1.97-3.07-3.82-6.73-5.26-12.61-1.44-5.87-2.22-11.53-4.54-11.53s-3.1 5.65-4.54 11.53c-1.44 5.87-3.29 9.53-5.26 12.61-1.88 2.93-5.85 9.78-5.85 9.78a18.024 18.024 0 0 0-2.58 9.32c0 10.03 8.2 18.17 18.23 18.17s18.23-8.13 18.23-18.17c0-3.41-.95-6.59-2.58-9.32zM38.35 64.96c-8.18 0-14.61-6.1-14.61-10.5 0-2.91 6.43 2.52 14.61 2.52s14.61-5.43 14.61-2.52c0 4.41-6.43 10.5-14.61 10.5" }) });
var WaterType_default = SvgWaterType;

// src/TypeIcon/svgComponents.tsx
var pokemonTypeComponents = {
  normal: {
    component: NormalType_default,
    color: pokemonTypesMap.get("normal")?.color
  },
  fire: {
    component: FireType_default,
    color: pokemonTypesMap.get("fire")?.color
  },
  water: {
    component: WaterType_default,
    color: pokemonTypesMap.get("water")?.color
  },
  electric: {
    component: ElectricType_default,
    color: pokemonTypesMap.get("electric")?.color
  },
  grass: {
    component: GrassType_default,
    color: pokemonTypesMap.get("grass")?.color
  },
  ice: {
    component: IceType_default,
    color: pokemonTypesMap.get("ice")?.color
  },
  fighting: {
    component: FightingType_default,
    color: pokemonTypesMap.get("fighting")?.color
  },
  poison: {
    component: PoisonType_default,
    color: pokemonTypesMap.get("poison")?.color
  },
  ground: {
    component: GroundType_default,
    color: pokemonTypesMap.get("ground")?.color
  },
  flying: {
    component: FlyingType_default,
    color: pokemonTypesMap.get("flying")?.color
  },
  psychic: {
    component: PsychicType_default,
    color: pokemonTypesMap.get("psychic")?.color
  },
  bug: {
    component: BugType_default,
    color: pokemonTypesMap.get("bug")?.color
  },
  rock: {
    component: RockType_default,
    color: pokemonTypesMap.get("rock")?.color
  },
  ghost: {
    component: GhostType_default,
    color: pokemonTypesMap.get("ghost")?.color
  },
  dragon: {
    component: DragonType_default,
    color: pokemonTypesMap.get("dragon")?.color
  },
  dark: {
    component: DarkType_default,
    color: pokemonTypesMap.get("dark")?.color
  },
  steel: {
    component: SteelType_default,
    color: pokemonTypesMap.get("steel")?.color
  },
  fairy: {
    component: FairyType_default,
    color: pokemonTypesMap.get("fairy")?.color
  }
};

// src/TypeIcon/TypeIcon.tsx
import { jsx as jsx22, jsxs as jsxs5 } from "react/jsx-runtime";
function TypeIcon(props) {
  const { typeId, terastal, filled, colored, rounded, theme = "dark", size = "sm", className, ...rest } = props;
  const dataProps = {
    "data-type": typeId,
    "data-terastal": terastal ? true : void 0
    // 'data-filled': filled ? 'true' : 'false',
    // 'data-colored': colored ? 'true' : 'false',
    // 'data-rounded': rounded ? 'true' : 'false',
    // 'data-size': size,
  };
  const pokeType = pokemonTypesMap2.get(typeId);
  if (!pokeType) {
    throw new Error(`Pok\xE9mon Type with id '${typeId}' not found`);
  }
  const componentConfig = pokemonTypeComponents[pokeType.id];
  if (!componentConfig) {
    throw new Error(`SVG icon for Pok\xE9mon Type '${pokeType.id}' not found`);
  }
  const TypeComponent = componentConfig.component;
  const wrapperClass = cn(
    typeIconRecipe({
      typeId: pokeType.id,
      filled,
      colored,
      rounded,
      theme,
      terastal,
      size
    }),
    className
  );
  const terastalBgClass = typeTeraIconBgRecipe({
    typeId: pokeType.id,
    filled,
    colored,
    rounded,
    theme,
    terastal,
    size
  });
  const typeGlyphClass = cn(
    typeIconGlyphRecipe({
      typeId: pokeType.id,
      filled,
      colored,
      rounded,
      theme,
      terastal,
      size
    })
  );
  return /* @__PURE__ */ jsxs5("span", { title: pokeType.name, className: wrapperClass, ...rest, ...dataProps, children: [
    terastal && /* @__PURE__ */ jsx22(Teratype_default, { className: terastalBgClass }),
    /* @__PURE__ */ jsx22(TypeComponent, { className: typeGlyphClass })
  ] });
}
export {
  Arrow_default as Arrow,
  Ball_default as Ball,
  BugType_default as BugType,
  DarkType_default as DarkType,
  DragonType_default as DragonType,
  ElectricType_default as ElectricType,
  FairyType_default as FairyType,
  FightingType_default as FightingType,
  FireType_default as FireType,
  FlyingType_default as FlyingType,
  GhostType_default as GhostType,
  GrassType_default as GrassType,
  GroundType_default as GroundType,
  IceType_default as IceType,
  NormalType_default as NormalType,
  PoisonType_default as PoisonType,
  PsychicType_default as PsychicType,
  RockType_default as RockType,
  SteelType_default as SteelType,
  Teratype_default as Teratype,
  TypeIcon,
  WaterType_default as WaterType
};
//# sourceMappingURL=index.js.map
