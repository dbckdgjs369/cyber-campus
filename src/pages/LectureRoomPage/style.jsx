import styled from "@emotion/styled";

export const Innerdiv = styled.div`
  border: 1px solid #f1f1f0;
  background-color: white;
  min-height: 30vh;
  height: auto;
  border-radius: 5px;
  margin-bottom: 3rem;
  box-shadow: 0px 0px 1px 1px #f1f1f0;
  padding: 2rem;
  float: left;
  width: 48%;
`;

export const DropDown = styled.select`
  border-radius: 40px;
  height: 35px;
  width: 200px;
  text-align: center;
  margin: auto;
`;

export const P = styled.p`
  font-size: 12px;
  float: left;
`;
export const Square = styled.div`
  width: 12px;
  height: 12px;
  float: left;
`;

export const LectureDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
`;
