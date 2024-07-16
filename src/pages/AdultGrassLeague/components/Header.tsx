import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../styles.css";
import {
  HeadingWrapper,
  Heading,
  Heading2,
  RegistrationBoxHeading,
  RegistrationBoxMessage,
} from "../styles";

interface HeaderProps {
    isSmallScreen: boolean;
    onRegistrationFormClick: () => void;
}

const Header = ({ isSmallScreen, onRegistrationFormClick }: HeaderProps) => {
    return (
      <Grid container sx={{ background: "white", paddingBottom: "50px" }}>
        <Grid xs={1} md={2}></Grid>
        <Grid xs={10} md={8}>
          <HeadingWrapper>
            {!isSmallScreen ? (
              <>
                <Heading>Adult Women's Recreational</Heading>
                <Heading2>Grass League</Heading2>
              </>
            ) : (
              <Heading>Adult Women's Recreational Grass League</Heading>
            )}
          </HeadingWrapper>
          <Box
            sx={{
              background: "#EBD8D4",
              borderRadius: "20px",
              padding: "25px",
              marginTop: "30px",
            }}
          >
            <RegistrationBoxHeading>
              🚩 Registration now open
            </RegistrationBoxHeading>
            <RegistrationBoxMessage>
              Registration open from April 15th - May 15th, 2024. Cap of 24
              teams. Sign up as teams of 4-7 players. Please decide on team name
              and team captain as group and use those details during
              registration to link teams together
              <br />
              <br />
              <b>ALL</b> team members must complete the following form:
            </RegistrationBoxMessage>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/U4VoXWtnszqznKM5A"
            >
              <Button
                onClick={onRegistrationFormClick}
                sx={{
                  background: "#930A0A",
                  color: "white",
                  borderRadius: "15px",
                  padding: "0 15px 0 15px",
                  maxWidth: "300px",
                  fontSize: "24px",
                  fontFamily: "General Sans",
                  fontWeight: 500,
                  textTransform: "none",
                  ":hover": {
                    bgcolor: "#570404",
                    color: "white",
                  },
                }}
              >
                Registration Form
              </Button>
            </a>
          </Box>
        </Grid>
        <Grid xs={1} md={2}></Grid>
      </Grid>
    );
  };
  export default Header;
  