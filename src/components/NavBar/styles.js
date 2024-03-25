import styled from 'styled-components'

const StyledUl = styled.ul`
  background-color: white;
  border-bottom: 1px solid #383A3C;
  z-index: 100;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`;

const StyledLi = styled.li`
  float: right;
    display: block;
    color: #383A3C;
    font-family: 'General Sans';
    text-align: center;
    padding: 20px 16px;
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
  & button {
    background-color: transparent;
    border: none;
    padding: 10px 0px 10px 14px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export { StyledLi, StyledLiHome, StyledUl };