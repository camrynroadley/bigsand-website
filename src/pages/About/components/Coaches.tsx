import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { Coach, CoachCardProps } from "../../../models/types";
import "../styles.css";
import {
  CoachesSubheading,
  CoachName,
  CoachRole,
  CoachBio,
  CoachesCardsWrapper,
} from "../styles";

interface CoachesProps {
    sortedCoaches: Coach[],
}

const CoachesCard = ({
  firstName,
  lastName,
  role,
  bio,
  ranking,
  picture,
}: CoachCardProps): JSX.Element => {
  return (
    <Card elevation={0} sx={{ borderRadius: 6, background: "#383A3C" }}>
      {/* TODO: Commenting out picture for the time being */}
      {/* <img width="100%" height="100%" src={`${picture}`} alt="Coach" /> */}
      <Container maxWidth="md" sx={{ paddingTop: "25px" }}>
        <Stack spacing={1}>
          <CoachName>{`${firstName} ${lastName}`}</CoachName>
          <CoachRole>{`${role}`}</CoachRole>
          <CoachBio>{`${bio}`}</CoachBio>
        </Stack>
      </Container>
    </Card>
  );
};

const Coaches = ({ sortedCoaches }: CoachesProps): JSX.Element => {
  return (
    <CoachesCardsWrapper>
      <CoachesSubheading>Current Coaches</CoachesSubheading>
      <Grid container spacing={2}>
        {sortedCoaches.map((coach: Coach) => (
          <Grid xs={12} md={4}>
            <CoachesCard
              firstName={coach.firstName}
              lastName={coach.lastName}
              role={coach.role}
              bio={coach.bio}
              ranking={coach.ranking}
              picture={coach.picture}
            />
          </Grid>
        ))}
      </Grid>
    </CoachesCardsWrapper>
  );
};

export default Coaches;
