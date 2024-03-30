import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BACKGROUND_NEUTRAL } from "../../constants";
import {
  HeadingWrapper,
  Heading,
  Heading2,
  Subheading,
  SectionHeading,
  ProgramTitle,
  ProgramDate,
  ProgramDescription,
  Spacer,
  LearnMoreButton,
} from "./styles";

const Home = () => {
  const onLearnMoreButtonClick = () => {
    console.log("Learn More Button Clicked");
  };

  const HeroImage = () => {
    return (
      <Box
        sx={{
          marginTop: "60px",
          background: "#EFEFEF",
        }}
      >
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={6}>
            <HeadingWrapper>
              <Heading>For the love</Heading>
              <Heading2>of the game.</Heading2>
              <Subheading>
                Big Sand Volleyball has offered club, camps and
                leagues in Winnipeg for over 15 years. Our goal is the same as always:
                to encourage a love for the game of volleyball.
              </Subheading>
            </HeadingWrapper>
          </Grid>
          <Grid xs={4}>
            <Spacer />
            <img
              width="100%"
              height="100%"
              src="/hero-image-4.png"
              alt="Hero"
            />
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </Box>
    );
  };

  const UpcomingPrograms = () => {
    return (
      <Box
        sx={{
          bgcolor: BACKGROUND_NEUTRAL,
          paddingTop: "80px",
          paddingBottom: "80px",
          margin: 0,
          width: "100%",
        }}
      >
        <Stack
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={1}></Grid>
            <Grid xs={10}>
              <SectionHeading>UPCOMING PROGRAMS</SectionHeading>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid xs={1}></Grid>
            <Grid xs={10}>
              <Card elevation={0} sx={{ borderRadius: 6 }}>
                <Grid container spacing={2}>
                  <Grid xs={4}>
                    <img
                      width="100%"
                      height="100%"
                      src="/grass-league-temporary.jpg"
                      alt="Grass League"
                    />
                  </Grid>
                  <Grid xs={8}>
                    <Container maxWidth="md" sx={{ paddingTop: "25px" }}>
                      <Chip
                        sx={{
                          background: "#383A3C",
                          color: "white",
                          height: "24px",
                        }}
                        label="ADULT COED"
                      />
                      <Stack spacing={1}>
                        <ProgramTitle>Recreational Grass League</ProgramTitle>
                        <ProgramDate>May - August 2024</ProgramDate>
                        <ProgramDescription>
                          Recreational and competitive co-ed adult grass league.
                          Monday nights at Sturgeon Heights Community Centre.
                        </ProgramDescription>
                        <LearnMoreButton onClick={onLearnMoreButtonClick}>
                          Learn more
                          <ArrowForwardIosIcon fontSize="small" />
                        </LearnMoreButton>
                      </Stack>
                    </Container>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid xs={1}></Grid>
            <Grid xs={10}>
              <Card elevation={0} sx={{ borderRadius: 6 }}>
                <Grid container spacing={2}>
                  <Grid xs={4}>
                    <img
                      width="100%"
                      height="100%"
                      src="/summer-camp-1.jpeg"
                      alt="Summer Camp"
                    />
                  </Grid>
                  <Grid xs={8}>
                    <Container sx={{ paddingTop: "25px" }} maxWidth="md">
                      <Chip
                        sx={{
                          background: "#383A3C",
                          color: "white",
                          height: "24px",
                        }}
                        label="U14 GIRLS"
                      />
                      <Stack spacing={1}>
                        <ProgramTitle>Summer Camp</ProgramTitle>
                        <ProgramDate>August 2024</ProgramDate>
                        <ProgramDescription>
                          Join us evenings this August as a way of getting some
                          practice before the school season and tryouts begin.
                        </ProgramDescription>
                        <LearnMoreButton onClick={onLearnMoreButtonClick}>
                          Learn more
                          <ArrowForwardIosIcon fontSize="small" />
                        </LearnMoreButton>
                      </Stack>
                    </Container>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={1}></Grid>
          </Grid>
        </Stack>
      </Box>
    );
  };

  return (
    <>
      <NavBar />
      <HeroImage />
      <UpcomingPrograms />
      <Footer />
    </>
  );
};

export default Home;
