import { getEncodingMode } from "./check-mode";
import { convertToBits } from "./convert-to-bits";

const encodingMode = getEncodingMode("cáfe");

const bits = convertToBits("Test String");
