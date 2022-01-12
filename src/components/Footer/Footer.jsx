import { fontSize, fontWeight } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <div>
        <img src="image/footerImg.png" alt="로고"></img>
        <button
          style={{
            float: "right",
            width: "200px",
            backgroundColor: "white",
            border: "1px solid #cccccc",
            borderRadius: "3px",
            fontSize: "13px",
            padding: "3px",
          }}
        >
          ::::: 관련사이트 :::::
        </button>
      </div>
      <div style={{ float: "left", width: "100%" }}>
        <Link to="https://plus.cnu.ac.kr/html/kr/guide/guide_080501.html">
          <p
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#164194",
              marginRight: "1rem",
            }}
          >
            개인정보 처리 방침
          </p>
        </Link>
        <Link to="https://plus.cnu.ac.kr/html/kr/guide/guide_0806.html">
          <p
            style={{
              display: "inline-block",
              fontSize: "12px",
              color: "black",
            }}
          >
            이메일무단수집거부
          </p>
        </Link>
      </div>
      <div style={{ fontSize: "12px" }}>
        <p>
          대전광역시 유성구 대학로 99 충남대학교 중앙도서관 1층 <br />
          TEL : 042-821-6068 FAX : 042-821-5280 E-Mail: cybercnu@cnu.ac.kr
        </p>
        <p>
          Copyright 2021. 충남대학교 대학원격교육지원센터 All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
