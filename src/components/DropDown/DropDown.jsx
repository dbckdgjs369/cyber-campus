import React from "react";

export default function DropDown() {
  return (
    <div>
      <select>
        <option key="daedeok" value="daedeok">
          대덕대학교
        </option>
        <option key="exchange" value="exchange">
          대전 충남 학점교류
        </option>
        <option key="vehicle" value="vehicle">
          아주자동차대학
        </option>
        <option key="cnu" value="cnu">
          충남대학교
        </option>
        <option key="cpu" value="cpu">
          충남도립대학
        </option>
        <option key="seminary" value="seminary">
          한국침례신학대학
        </option>
      </select>
    </div>
  );
}
