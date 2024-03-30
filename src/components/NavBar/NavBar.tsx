import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import {
  StyledLi,
  StyledUl,
  ProgramsWrapper,
  StyledLiHome,
  StyledLiProgramDropdown,
  StyledLiPrograms,
} from "./styles";
import "./styles.css";

const NavBar = () => {
  const onClick = () => {
    window.location.pathname = "";
  };

  return (
    <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
      <StyledUl>
        <>
          <Link to="/contact">
            <StyledLi>CONTACT</StyledLi>
          </Link>
          <StyledLi className="dropdown">
            <StyledLiPrograms className="dropbtn">PROGRAMS</StyledLiPrograms>
            <div className="dropdown-content">
              <Link to="/adult-grass-league">
                <a href="#">Adult Co-ed Grass League</a>
              </Link>
              <Link to="/about">
                <a href="#">18U Girls Grass League</a>
              </Link>
              <Link to="/about">
                <a href="#">14U Girls Summer Camps</a>
              </Link>
            </div>
          </StyledLi>
          <Link to="/about">
            <StyledLi>ABOUT</StyledLi>
          </Link>
        </>
        <StyledLiHome>
          <button onClick={onClick}>
            <img width="40px" src="/logo2.webp" alt="image" />
          </button>
        </StyledLiHome>
      </StyledUl>
    </Container>
  );
};

export default NavBar;
