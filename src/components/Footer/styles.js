import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
`;

const StyledHeading = styled.p`
  color: white;
  font-family: "General Sans";
  font-weight: 400;
  font-size: 1rem;
`;

const StyledLi = styled.li`
  color: white;
  font-family: "General Sans";
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export { StyledLi, StyledHeading, StyledUl };
