import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { StyledUl, StyledHeading, StyledLi } from "./styles";

const Footer = () => {
    return (
        <Box sx={{ background: '#383A3C' }}>
            <Grid container>
                <Grid xs={6}>
                    <StyledUl>
                        <StyledHeading>SOCIALS</StyledHeading>
                        <StyledLi>Instagram</StyledLi>
                        <StyledLi>Pinterest</StyledLi>
                    </StyledUl>
                </Grid>
                <Grid xs={6}>
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;
