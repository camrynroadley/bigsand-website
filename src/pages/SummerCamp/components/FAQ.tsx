import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles.css";
import { FAQSectionHeading } from "../styles";

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
              Who are the coaches?
            </AccordionSummary>
            <AccordionDetails
              sx={{
                background: "#383A3C",
                color: "white",
              }}
            >
              Please see the About page. 2+ coaches will be helping with each
              session.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FAQ;
