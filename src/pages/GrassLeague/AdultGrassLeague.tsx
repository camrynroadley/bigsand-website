import NavBar from "../../components/NavBar/NavBar";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { BACKGROUND_NEUTRAL } from "../../constants";
import "./styles.css";
import {
  HeadingWrapper,
  Heading,
  Heading2,
  RegistrationBoxHeading,
  RegistrationBoxMessage,
  SectionHeading,
  Subheading,
  InfoWrapper,
  InformationMessage,
} from "./styles";

const AdultGrassLeague = () => {
  const onRegistrationFormClick = () => {
    console.log("On Registration Form Click");
  };

  const HeaderSection = () => {
    return (
      <Grid container sx={{ background: "#EFEFEF", paddingBottom: '50px' }}>
        <Grid xs={2}></Grid>
        <Grid xs={8}>
          <HeadingWrapper>
            <Heading>Recreational</Heading>
            <Heading2>Grass League</Heading2>
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
              Registration open from April 15th - May 31st, 2024. Cap of 30
              teams. Please have <b>one</b> team member fill out the following
              form for the whole team:
            </RegistrationBoxMessage>
            <Button
              onClick={onRegistrationFormClick}
              sx={{
                background: "#930A0A",
                color: "white",
                borderRadius: "15px",
                padding: "0 15px 0 15px",
                maxWidth: "300px",
                fontSize: "20px",
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
          </Box>
        </Grid>
      </Grid>
    );
  }

  const AboutSection = () => {
    return (
      <Grid container sx={{ background: "#D9D9D9" }}>
        <Grid xs={2}></Grid>
        <Grid xs={8}>
          <InfoWrapper>
            <SectionHeading>About</SectionHeading>
            <Subheading>WHAT</Subheading>
            <InformationMessage>
              Recreational and competitive coed adult grass league
            </InformationMessage>
            <Subheading>WHO</Subheading>
            <InformationMessage>
              Adult Co-ed. Teams of 4. Each team must register with 4+ players.
              At least two women need to be on the team and at least two women
              need to be on the court at a time.
            </InformationMessage>
            <Subheading>WHERE</Subheading>
            <InformationMessage>
              Sturgeon Heights Community Centre. Games played outside on grass
              fields.
            </InformationMessage>
            <Subheading>WHEN</Subheading>
            <InformationMessage>
              Monday nights from June - August 2024. Games will be played
              between 6 - 9 pm.
            </InformationMessage>
            <Subheading>WHEN</Subheading>
            <InformationMessage>
              Monday nights from June - August 2024. Games will be played
              between 6 - 9 pm.
            </InformationMessage>
          </InfoWrapper>
        </Grid>
      </Grid>
    );
  };

  const FAQSection = () => {
    return (
      <Stack
        spacing={2}
        sx={{ padding: "100px 200px 100px 200px", background: "#5D6063" }}
      >
        <SectionHeading>FAQs</SectionHeading>
        <Box
          sx={{
            background: "#383A3C",
          }}
        >
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                background: "#383A3C",
                borderRadius: "20px",
              }}
            >
              What if we need a sub?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#383A3C",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                background: "#383A3C",
              }}
            >
              What shoes do I wear?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#383A3C",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    );
  };

  return (
    <>
      <NavBar />
      <HeaderSection />
      <AboutSection />
      <FAQSection />
    </>
  );
};

export default AdultGrassLeague;
