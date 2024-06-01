import { useLayoutEffect } from "react";
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
import { BACKGROUND_NEUTRAL } from "../../constants";

const SummerCamp = () => {
  const isSmallScreen: boolean = useMediaQuery("(max-width:600px)");

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
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
              Registration open until beginning of August 2024. Cap of 24
              girls per session.
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

  const AboutSection = () => {
    return (
      <Grid container sx={{ background: BACKGROUND_NEUTRAL }}>
        <Grid xs={1} md={2}></Grid>
        <Grid xs={10} md={8}>
          <InfoWrapper>
            <SectionHeading>About</SectionHeading>
            <Subheading>WHAT</Subheading>
            <InformationMessage>
              Running three sessions. You can sign up for as many as you'd like:
              <br/>
            FULL <s>Session 1: August 12-16</s>
            <br/>
            Session 2: August 19-23
            <br/>
            Session 3: August 26-30
            </InformationMessage>
            <Subheading>WHO</Subheading>
            <InformationMessage>
             Girls ages 11-15. No prior volleyball experience needed. Will be covering basics for beginners while
             also acting as a refresher for those more experienced before the school season.
            </InformationMessage>
            <Subheading>WHERE</Subheading>
            <InformationMessage>
              Sturgeon Heights Community Centre
            </InformationMessage>
            <Subheading>WHEN</Subheading>
            <InformationMessage>
              M-F 3:00 - 5:00pm
            </InformationMessage>
            <Subheading>COST</Subheading>
            <InformationMessage>Cost $200/session (If you sign up for 2 sessions cost is $350)</InformationMessage>
            <Subheading>HOW</Subheading>
            <InformationMessage>
              Please have one team member fill out the form at the top of the
              page. Payment can be made by e-transfer, cash or cheque by end of August.
            </InformationMessage>
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
                Who are the coaches?
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#383A3C",
                  color: "white",
                }}
              >
                Please see the About page. 2+ coaches will be helping with each session.
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
      <FAQSection />
      <Footer />
    </>
  );
};

export default SummerCamp;
