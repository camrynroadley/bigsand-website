import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles.css";
import {
  FAQSectionHeading,
} from "../styles";

const FAQ = () => {
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
                Will the girls be coached or is this simply playing time?
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#383A3C",
                  color: "white",
                }}
              >
                Both. Compared to our camps, we will not be teaching any skills
                or doing any drills. That being said, the coaches will still be
                watching the games and helping the girls with their technique
                and movement.
              </AccordionDetails>
            </Accordion>
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
                What will supervision be like?
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#383A3C",
                  color: "white",
                }}
              >
                We will have at least 2 coaches supervising each night. Games
                will be played within the boundaries of the hockey rink,
                limiting any traffic in and out.
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
                }}
              >
                Dress according to weather. You can play barefoot, in socks or
                in shoes. No jerseys necessary.
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    );
  };

  export default FAQ;
