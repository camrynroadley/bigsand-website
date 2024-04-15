import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { Alert, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BACKGROUND_NEUTRAL } from "../../constants";
import "./styles.css";
import {
  BigSandHeadingWrapper,
  BigSandHeading,
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
  const isSmallScreen: boolean = useMediaQuery("(max-width:600px)");

  const HeroImage = () => {
    return (
      <Box
        sx={{
          marginTop: !isSmallScreen ? "60px" : "0px",
          background: "white",
        }}
      >
        <Alert
          severity="info"
          sx={{
            background: "#EBD8D4",
            color: "#383A3C",
            fontFamily: "General Sans",
            fontWeight: 500,
          }}
          icon={false}
        >
          Welcome to the new Big Sand Volleyball Club website. This website is
          still a work-in-progress. For any concerns, please email:
          bigsandvolleyballwinnipeg@gmail.com
        </Alert>
        <Grid container>
          <Grid xs={1} md={1}></Grid>
          <Grid xs={10} md={6}>
            <Stack>
              <BigSandHeadingWrapper>
                <Stack spacing={2} direction="row">
                  <BigSandHeading>Big Sand Volleyball Club</BigSandHeading>
                  {/* <img
                    width={isSmallScreen ? "8%" : "6%"}
                    src="/bigkidlogo.jpg"
                    alt="Hero"
                  /> */}
                </Stack>
              </BigSandHeadingWrapper>
              <HeadingWrapper>
                <Heading>For the love</Heading>
                <Heading2>of the game.</Heading2>
                <Subheading>
                  Big Sand Volleyball has offered club, camps and leagues in
                  Winnipeg for over 15 years. Our goal is the same as always: to
                  encourage a love for the game of volleyball.
                </Subheading>
              </HeadingWrapper>
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

  const HeroImageNew = () => {
    return (
      <Box
        sx={{
          marginTop: !isSmallScreen ? "60px" : "0px",
          background: "white",
        }}
      >
        <Alert
          severity="info"
          sx={{
            background: "#EBD8D4",
            color: "#383A3C",
            fontFamily: "General Sans",
            fontWeight: 500,
          }}
          icon={false}
        >
          Welcome to the new Big Sand Volleyball Club website. This website is
          still a work-in-progress. For any concerns, please email:
          bigsandvolleyballwinnipeg@gmail.com
        </Alert>
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
              <Card
                elevation={0}
                sx={{ background: "#D0D0D0", borderRadius: 6 }}
              >
                <Container
                  sx={{
                    paddingTop: isSmallScreen ? "25px" : "35px",
                    paddingBottom: isSmallScreen ? "35px" : "40px",
                  }}
                >
                  <Stack spacing={1}>
                    <ProgramTitle>Women's Grass Volleyball League</ProgramTitle>
                    <ProgramDescription>
                      Recreational and competitive women's adult grass
                      (outdoors) league. Monday nights from May-August 2024 at
                      Sturgeon Heights Community Centre.
                    </ProgramDescription>
                    <Link className="link" to="/adult-grass-league">
                      <Button
                        sx={{
                          background: "transparent",
                          color: "#383A3C",
                          borderRadius: "15px",
                          border: "1px solid #383A3C",
                          padding: "0 15px 0 15px",
                          maxWidth: "300px",
                          fontSize: "20px",
                          fontFamily: "General Sans",
                          fontWeight: 400,
                          textTransform: "none",
                          ":hover": {
                            bgcolor: "#111213",
                            color: "white",
                          },
                        }}
                      >
                        Learn more
                      </Button>
                    </Link>
                  </Stack>
                </Container>
              </Card>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid xs={1}></Grid>
            <Grid xs={10}>
              <Card
                elevation={0}
                sx={{ background: "#D0D0D0", borderRadius: 6 }}
              >
                <Container
                  sx={{
                    paddingTop: isSmallScreen ? "25px" : "35px",
                    paddingBottom: isSmallScreen ? "35px" : "40px",
                  }}
                >
                  <Stack spacing={1}>
                    <ProgramTitle>
                      Girls Age 12-18 Grass Volleyball League
                    </ProgramTitle>
                    <ProgramDescription>
                      Recreational and competitive girls grass (outdoors)
                      league. Tuesday nights from May-August 2024 at Sturgeon
                      Heights Community Centre.
                    </ProgramDescription>
                    <Link className="link" to="/girls-grass-league">
                      <Button
                        sx={{
                          background: "transparent",
                          color: "#383A3C",
                          borderRadius: "15px",
                          border: "1px solid #383A3C",
                          padding: "0 15px 0 15px",
                          maxWidth: "300px",
                          fontSize: "20px",
                          fontFamily: "General Sans",
                          fontWeight: 400,
                          textTransform: "none",
                          ":hover": {
                            bgcolor: "#111213",
                            color: "white",
                          },
                        }}
                      >
                        Learn more
                      </Button>
                    </Link>
                  </Stack>
                </Container>
              </Card>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid xs={1}></Grid>
            <Grid xs={10}>
              <Card
                elevation={0}
                sx={{ background: "#D0D0D0", borderRadius: 6 }}
              >
                <Container
                  sx={{
                    paddingTop: isSmallScreen ? "25px" : "35px",
                    paddingBottom: isSmallScreen ? "35px" : "40px",
                  }}
                >
                  <Stack spacing={1}>
                    <ProgramTitle>Girls Age 11-15 Summer Camp</ProgramTitle>
                    <ProgramDescription>
                      Summer camp to cover basics for beginners while also
                      acting as a refresher for those more experienced before
                      the school season. Three weekly sessions this August 2024
                      at Sturgeon Heights Community Centre.
                    </ProgramDescription>
                    <Link className="link" to="/girls-summer-camp">
                      <Button
                        sx={{
                          background: "transparent",
                          color: "#383A3C",
                          borderRadius: "15px",
                          border: "1px solid #383A3C",
                          padding: "0 15px 0 15px",
                          maxWidth: "300px",
                          fontSize: "20px",
                          fontFamily: "General Sans",
                          fontWeight: 400,
                          textTransform: "none",
                          ":hover": {
                            bgcolor: "#111213",
                            color: "white",
                          },
                        }}
                      >
                        Learn more
                      </Button>
                    </Link>
                  </Stack>
                </Container>
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
      <HeroImageNew />
      <UpcomingPrograms />
      <Footer />
    </>
  );
};

export default Home;

// const UpcomingPrograms = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: BACKGROUND_NEUTRAL,
//         paddingTop: "80px",
//         paddingBottom: "80px",
//         margin: 0,
//         width: "100%",
//       }}
//     >
//       <Stack
//         spacing={2}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Grid
//           container
//           spacing={2}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <Grid xs={1}></Grid>
//           <Grid xs={10}>
//             <SectionHeading>UPCOMING PROGRAMS</SectionHeading>
//           </Grid>
//           <Grid xs={1}></Grid>
//           <Grid xs={1}></Grid>
//           <Grid xs={10}>
//             <Card elevation={0} sx={{ borderRadius: 6 }}>
//               <Grid container spacing={2}>
//                 <Grid xs={0} md={4}>
//                   {!isSmallScreen && (
//                     <img
//                       width="100%"
//                       height="100%"
//                       src="/grass-league.jpg"
//                       alt="Grass League"
//                     />
//                   )}
//                 </Grid>
//                 <Grid xs={12} md={8}>
//                   <Container
//                     sx={{
//                       paddingTop: isSmallScreen ? "10px" : "35px",
//                       paddingBottom: isSmallScreen ? "25px" : "40px",
//                     }}
//                     maxWidth="md"
//                   >
//                     <Chip
//                       sx={{
//                         background: "#383A3C",
//                         color: "white",
//                         height: "24px",
//                       }}
//                       label="WOMENS"
//                     />
//                     <Stack spacing={1}>
//                       <ProgramTitle>
//                         Adult Recreational Grass League
//                       </ProgramTitle>
//                       <ProgramDate>May - August 2024</ProgramDate>
//                       <ProgramDescription>
//                         Recreational and competitive women's adult grass
//                         league. Monday nights at Sturgeon Heights Community
//                         Centre.
//                       </ProgramDescription>
//                       <Link className="link" to="/adult-grass-league">
//                         <LearnMoreButton>
//                           Learn more
//                           <ArrowForwardIosIcon fontSize="small" />
//                         </LearnMoreButton>
//                       </Link>
//                     </Stack>
//                   </Container>
//                 </Grid>
//               </Grid>
//             </Card>
//           </Grid>
//           <Grid xs={1}></Grid>
//           <Grid xs={1}></Grid>
//           <Grid xs={10}>
//             <Card elevation={0} sx={{ borderRadius: 6 }}>
//               <Grid container spacing={2}>
//                 <Grid xs={0} md={4}>
//                   {!isSmallScreen && (
//                     <img
//                       width="100%"
//                       height="100%"
//                       src="/girls-grass-league.jpeg"
//                       alt="Grass League"
//                     />
//                   )}
//                 </Grid>
//                 <Grid xs={12} md={8}>
//                   <Container
//                     sx={{
//                       paddingTop: isSmallScreen ? "10px" : "25px",
//                       paddingBottom: isSmallScreen ? "25px" : "0px",
//                     }}
//                     maxWidth="md"
//                   >
//                     <Chip
//                       sx={{
//                         background: "#383A3C",
//                         color: "white",
//                         height: "24px",
//                       }}
//                       label="AGE 12-18"
//                     />
//                     <Stack spacing={1}>
//                       <ProgramTitle>
//                         Girls Recreational Grass League
//                       </ProgramTitle>
//                       <ProgramDate>May - August 2024</ProgramDate>
//                       <ProgramDescription>
//                         Recreational and competitive women's adult grass
//                         league. Monday nights at Sturgeon Heights Community
//                         Centre.
//                       </ProgramDescription>
//                       <Link className="link" to="/girls-grass-league">
//                         <LearnMoreButton>
//                           Learn more
//                           <ArrowForwardIosIcon fontSize="small" />
//                         </LearnMoreButton>
//                       </Link>
//                     </Stack>
//                   </Container>
//                 </Grid>
//               </Grid>
//             </Card>
//           </Grid>
//           <Grid xs={1}></Grid>
//           <Grid xs={1}></Grid>
//           <Grid xs={10}>
//             <Card elevation={0} sx={{ borderRadius: 6 }}>
//               <Grid container spacing={2}>
//                 <Grid xs={0} md={4}>
//                   {!isSmallScreen && (
//                     <img
//                       width="100%"
//                       height="100%"
//                       src="/summer-camp-1.jpeg"
//                       alt="Summer Camp"
//                     />
//                   )}
//                 </Grid>
//                 <Grid xs={12} md={8}>
//                   <Container
//                     sx={{
//                       paddingTop: isSmallScreen ? "10px" : "25px",
//                       paddingBottom: isSmallScreen ? "25px" : "0px",
//                     }}
//                     maxWidth="md"
//                   >
//                     <Chip
//                       sx={{
//                         background: "#383A3C",
//                         color: "white",
//                         height: "24px",
//                       }}
//                       label="AGE 11-15"
//                     />
//                     <Stack spacing={1}>
//                       <ProgramTitle>Girls Summer Camp</ProgramTitle>
//                       <ProgramDate>August 2024</ProgramDate>
//                       <ProgramDescription>
//                         Join us evenings this August as a way of getting some
//                         practice before the school season and tryouts begin.
//                       </ProgramDescription>
//                       <Link className="link" to="/girls-summer-camp">
//                         <LearnMoreButton>
//                           Learn more
//                           <ArrowForwardIosIcon fontSize="small" />
//                         </LearnMoreButton>
//                       </Link>
//                     </Stack>
//                   </Container>
//                 </Grid>
//               </Grid>
//             </Card>
//           </Grid>
//           <Grid xs={1}></Grid>
//         </Grid>
//       </Stack>
//     </Box>
//   );
// };
