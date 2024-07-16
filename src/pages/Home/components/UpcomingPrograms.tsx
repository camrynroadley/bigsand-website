import { Link } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import {  Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { COLORS } from "../../../constants";
import "../styles.css";
import {
  SectionHeading,
  ProgramTitle,
  ProgramDescription,
} from "../styles";

interface UpcomingProgramsProps {
    isSmallScreen: boolean;
}

const UpcomingPrograms = ({ isSmallScreen }: UpcomingProgramsProps) => {
    return (
      <Box
        sx={{
          bgcolor: COLORS.BACKGROUND_NEUTRAL,
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

export default UpcomingPrograms;
