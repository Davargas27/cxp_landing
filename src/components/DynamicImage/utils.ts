import LogoCPX from "./images/logo_cpx.svg";
import Sabio from "./images/sabio.png";
import { ImageType } from "@/types";

const ICONS = {
  LogoCPX,
  Sabio, 
} as const;

const ICON_DEFAULT = ICONS.LogoCPX;

export const getIcon = (type: ImageType) => {
  return ICONS[type] || ICON_DEFAULT;

}