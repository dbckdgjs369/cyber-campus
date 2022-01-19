import React from "react";
import Lecture from "../Lecture/Lecture";
import ListLecture from "../ListLecture/ListLecture";

export default function ListTypeLecture() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2rem",
        alignContent: "space-around",
      }}
    >
      <ListLecture
        classification="교양(일반)"
        title="프랑스문화 테마기행(03반)"
        grade="3학점"
        profinfo="송진석"
        class="불어불문학과"
      />
      <ListLecture
        classification="전공(기초)"
        title="컴퓨터프로그래밍 2(07반)"
        grade="3학점"
        profinfo="조승범"
        class="컴퓨터융합학부"
      ></ListLecture>
      <ListLecture
        classification="전공(심화)"
        title="분산시스템(00반)"
        grade="3학점"
        profinfo="양희철"
        class="컴퓨터공학과"
      />
      <ListLecture
        classification="전공(심화)"
        title="수치프로그래밍(00반)"
        grade="3학점"
        profinfo="김경섭"
        class="컴퓨터융합학부"
      />
      <ListLecture
        classification="전공(심화)"
        title="컴파일러개론(01반)"
        grade="3학점"
        profinfo="조은선"
        class="컴퓨터융합학부"
      />
    </div>
  );
}
