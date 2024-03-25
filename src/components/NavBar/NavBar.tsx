import { Container } from '@mui/material';
import { StyledLi, StyledLiHome, StyledUl } from './styles';

const NavBar = () => {
    const onClick = () => {
        window.location.pathname = "";
    }

    return (
      <Container maxWidth="xl" sx={{ padding: '0px !important' }}>
        <StyledUl>
                <>
                    <StyledLi>CONTACT</StyledLi>
                    <StyledLi>PROGRAMS</StyledLi>
                    <StyledLi>COACHES</StyledLi>
                    <StyledLi>ABOUT</StyledLi>
                </>
                <StyledLiHome>
                    <button onClick={onClick}>
                      <img width="40px" src="/logo2.webp" alt="image" />
                    </button>
                </StyledLiHome>

        </StyledUl >
      </Container>
    );
}

export default NavBar;