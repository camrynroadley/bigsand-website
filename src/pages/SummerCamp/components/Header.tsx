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
              <Heading>Girls Age 11-15 Summer</Heading>
              <Heading2>Camp 2024</Heading2>
            </>
          ) : (
            <Heading>Girls Age 11-15 Summer Camp 2024</Heading>
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
            Registration open until beginning of August 2024. Cap of 24 girls
            per session.
          </RegistrationBoxMessage>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forms.gle/fk5NUKPRvU2AuJ5v5"
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
