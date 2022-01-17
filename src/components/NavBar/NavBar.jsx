import React from "react";
import { NameElement, Nav, Nav2, NavElement, NavElement2 } from "./style";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Nav>
        <NavElement style={{ marginRight: "150px" }}>
          <Link to="/todo">
            <img
              src="image/logo.png"
              alt="로고"
              style={{ height: "50px" }}
            ></img>
          </Link>
        </NavElement>
        <NavElement>
          <p>
            <b>강의실</b>
          </p>
        </NavElement>
        <NavElement>
          <p>
            <b>알림마당</b>
          </p>
        </NavElement>

        <NameElement>
          <AccountCircleIcon
            fontSize="large"
            style={{
              float: "left",
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "60px",
              margin: "15px",
            }}
          />
          이름
          <MailOutlineIcon
            fontSize="medium"
            style={{ marginRight: "30px", marginLeft: "10px" }}
          />
        </NameElement>
      </Nav>
      <Nav2>
        <Link to="/myLecture">
          <NavElement2>강의실</NavElement2>
        </Link>
        <Link to="/todo">
          <NavElement2>TO-DO-List</NavElement2>
        </Link>
        <NavElement2>학습현황</NavElement2>
      </Nav2>
    </div>
  );
}
