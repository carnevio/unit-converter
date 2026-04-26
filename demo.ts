import { convertToMeters } from "./conversion.ts";

const value = 1.0;
const unit = "mile";
const meters = convertToMeters(value, unit);
console.log(`${value} ${unit} = ${meters} meter`);
