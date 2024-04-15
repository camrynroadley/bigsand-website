import styled from "styled-components";

const StyledUl = styled.ul`
  background-color: #F0F0F0;
  border-bottom: 1px solid #383a3c;
  z-index: 100;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledLi = styled.li`
  float: right;
  display: block;
  color: #383a3c;
  font-family: "General Sans";
  text-align: center;
  @media (min-width: 600px) {
    padding: 20px 16px;
  }
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledLiHome = styled.li`
  float: left;
  list-style-type: none;
  & button {
    background-color: transparent;
    border: none;
    padding: 10px 0px 10px 14px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ProgramsWrapper = styled.ul`
  display: block;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  // z-index: 1;
`;


const StyledLiPrograms = styled.li`
  color: #383a3c;
  font-family: "General Sans";
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const StyledLiProgramDropdown = styled.li`
  float: right;
  display: block;
  color: #383a3c;
  font-family: "General Sans";
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  &:hover ${ProgramsWrapper} {
    display: block;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;


export {
  StyledLi,
  StyledLiHome,
  StyledUl,
  ProgramsWrapper,
  StyledLiProgramDropdown,
  StyledLiPrograms,
};
