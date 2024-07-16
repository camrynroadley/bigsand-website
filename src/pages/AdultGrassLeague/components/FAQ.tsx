import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles.css";
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

  export default FAQ;
