import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Grid from "@mui/material/Unstable_Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./styles.css";
import {
  HeadingWrapper,
  Heading,
  Heading2,
  RegistrationBoxHeading,
  RegistrationBoxMessage,
  SectionHeading,
  FAQSectionHeading,
  Subheading,
  InfoWrapper,
  InformationMessage,
} from "./styles";
import { COLORS } from "../../constants";

const AdultGrassLeague = () => {
  const isSmallScreen: boolean = useMediaQuery("(max-width:600px)");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const onRegistrationFormClick = () => {
    console.log("On Registration Form Click");
  };

  const HeaderSection = () => {
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

  const AboutSection = () => {
    return (
      <Grid container sx={{ background: COLORS.BACKGROUND_NEUTRAL }}>
        <Grid xs={1} md={2}></Grid>
        <Grid xs={10} md={8}>
          <InfoWrapper>
            <SectionHeading>About</SectionHeading>
            <Subheading>WHAT</Subheading>
            <InformationMessage>
              Recreational and competitive women's adult grass league (outdoors)
            </InformationMessage>
            <Subheading>WHO</Subheading>
            <InformationMessage>
              Adult Women. Each team must register with 4-7 players on their
              roster. Games are played with 4 players on the court at a time
              (you may use subs or 4 only)
            </InformationMessage>
            <Subheading>WHERE</Subheading>
            <InformationMessage>
              Sturgeon Heights Community Centre. Games will be played outside on
              grass fields set up within the hockey rink. Indoor community
              centre access to bathrooms, water and change rooms.
            </InformationMessage>
            <Subheading>WHEN</Subheading>
            <InformationMessage>
              Monday nights for 10 weeks. Beginning May 27th - early August
              2024. Teams will play 2 games/night. Games will be played between
              6-10pm. In case of weather cancellations, games may be rescheduled
              to Thursday of the same week, or the league may be extended by a
              week. More details to follow.
            </InformationMessage>
            <Subheading>COST</Subheading>
            <InformationMessage>$500 per team</InformationMessage>
            <Subheading>HOW</Subheading>
            <InformationMessage>
              Please have all team members fill out the form at the top of the
              page. Please decide on team name and team captain as group and use
              those details during registration to link players together.
              Payment can be made by e-transfer, cash or cheque. More details to
              follow.
            </InformationMessage>
            <Subheading>WAIVER FORM</Subheading>
            <InformationMessage>
              A waiver form will be emailed to participants before the start of
              the league. All participants must print and sign the waiver form,
              and bring with them to the first game in order to play. More
              details to follow.
            </InformationMessage>
            <Subheading>RULES</Subheading>
            <Stack direction="row" spacing={2}>
              <InformationMessage>
                For more information and rules, please follow this link:
              </InformationMessage>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/16haK2HwjiM-NAjwvurYbz8ti2h6w1i-zbFBOHox9qFg/edit?usp=sharing"
              >
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
                  Rules
                </Button>
              </a>
            </Stack>
          </InfoWrapper>
        </Grid>
      </Grid>
    );
  };

  const FAQSection = () => {
    return (
      <Grid container sx={{ background: "#5D6063" }}>
        <Grid xs={1} md={2}></Grid>
        <Grid xs={10} md={8}>
          <FAQSectionHeading>FAQs</FAQSectionHeading>
          <Box
            sx={{
              background: "#383A3C",
              marginBottom: "50px",
            }}
          >
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  background: "#383A3C",
                  color: "white",
                }}
              >
                What if we need a sub?
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#383A3C",
                  color: "white",
                }}
              >
                If you are short a player, you may play with 3 players (no
                additional ghost rules apply). If you do not have minimum 3
                players, please contact the organizers at
                bigsandvolleyballwinnipeg@gmail.com to forfeit the games for
                that week.
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                  background: "#383A3C",
                  color: "white",
                }}
              >
                What do I wear?
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#383A3C",
                  color: "white",
                  fontSize: "24px",
                }}
              >
                Dress according to weather. You can play barefoot, in socks or
                in shoes. No jerseys required.
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <NavBar />
      <HeaderSection />
      <AboutSection />
      {/* <FAQSection /> */}
      <Footer />
    </>
  );
};

export default AdultGrassLeague;
