import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "../styles.css";
import {
  BigSandHeadingWrapper,
  Heading,
  Heading2,
  Subheading,
  Spacer,
} from "../styles";

interface HeroProps {
    isSmallScreen: boolean;
}

const Hero = ({ isSmallScreen }: HeroProps) => {
    return (
      <Box
        sx={{
          marginTop: !isSmallScreen ? "60px" : "0px",
          background: "white",
        }}
      >
        <Grid container>
          <Grid xs={1} md={1}></Grid>
          <Grid xs={10} md={6}>
            <Stack direction="row">
              <BigSandHeadingWrapper>
                <Heading>Big Sand</Heading>
                <Heading2>Volleyball</Heading2>
                <Subheading>
                  Big Sand Volleyball has offered club, camps and leagues in
                  Winnipeg for over 15 years. Our goal is the same as always: to
                  encourage a love for the game of volleyball.
                </Subheading>
              </BigSandHeadingWrapper>
            </Stack>
          </Grid>
          <Grid xs={1} md={0}></Grid>
          <Grid xs={1} md={0}></Grid>
          <Grid xs={10} md={4}>
            <Spacer />
            <img
              width="100%"
              height="100%"
              src="/hero-image-4.png"
              alt="Hero"
            />
          </Grid>
          <Grid xs={1} md={1}></Grid>
        </Grid>
      </Box>
    );
  };

  export default Hero;
