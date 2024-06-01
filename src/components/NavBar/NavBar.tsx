import { Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DehazeIcon from "@mui/icons-material/Dehaze";
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
  const isSmallScreen: boolean = useMediaQuery("(max-width:600px)");
  const onBigSandLogoClick = () => {
    window.location.pathname = "";
  };

  const onHamburgerIconClick = () => {
    var x = document.getElementById("myLinks");
    if (x && x.style.display === "block") {
      x.style.display = "none";
    } else if (x) {
      x.style.display = "block";
    }
  };

  return (
    <>
      {!isSmallScreen ? (
        <Container maxWidth={false} sx={{ padding: "0px !important" }}>
          <StyledUl>
            <>
              <a
                href="https://bigsand.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledLi>CLOTHING</StyledLi>
              </a>
              <Link to="/contact">
                <StyledLi>CONTACT</StyledLi>
              </Link>
              <StyledLi className="dropdown">
                <StyledLiPrograms className="dropbtn">
                  PROGRAMS
                </StyledLiPrograms>
                <div className="dropdown-content">
                  {/* <Link to="/adult-grass-league">
                    <a href="#">Adult Women's Grass League</a>
                  </Link>
                  <Link to="/girls-grass-league">
                    <a href="#">Girls Age 12-18 Grass League</a>
                  </Link> */}
                  <Link to="/girls-summer-camp">
                    <a href="#">Girls Age 11-15 Summer Camps</a>
                  </Link>
                </div>
              </StyledLi>
              <Link to="/about">
                <StyledLi>ABOUT</StyledLi>
              </Link>
            </>
            <StyledLiHome>
              <button onClick={onBigSandLogoClick}>
                <img width="40px" src="/logo.png" alt="image" />
              </button>
            </StyledLiHome>
          </StyledUl>
        </Container>
      ) : (
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
          <div className="topnav">
            <StyledLiHome>
              <button onClick={onBigSandLogoClick}>
                <img width="40px" src="/logo.png" alt="image" />
              </button>
            </StyledLiHome>
            <span id="myLinks">
              <Link to="/">
                <StyledLi></StyledLi>
              </Link>
              <Link to="/about">
                <StyledLi>ABOUT</StyledLi>
              </Link>
              <Link to="/contact">
                <StyledLi>CONTACT</StyledLi>
              </Link>
              {/* <Link to="/adult-grass-league">
                <StyledLi>Adult Women's Grass League</StyledLi>
              </Link>
              <Link to="/girls-grass-league">
                <StyledLi>Girls Age 12-18 Grass League</StyledLi>
              </Link> */}
              <Link to="/girls-summer-camp">
                <StyledLi>Girls Age 11-15 Summer Camps</StyledLi>
              </Link>
              <a
                href="https://bigsand.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledLi>CLOTHING</StyledLi>
              </a>
            </span>
            <a href="#" className="icon" onClick={onHamburgerIconClick}>
              <DehazeIcon />
            </a>
          </div>
        </Container>
      )}
    </>
  );
};

export default NavBar;
