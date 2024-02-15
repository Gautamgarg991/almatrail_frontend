import { Grid, Typography, Button } from "@mui/material";
import rightImage from "../../assets/hi.png";

const Section1 = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexDirection: { xs: "column-reverse", sm: "row" },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: {
            xs: "center",
            sm: "flex-start",
          },
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
        gap={3}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "40px",
            fontWeight: "100",
            textTransform: "uppercase",
          }}
        >
          connecting you with your future peers
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            marginTop: "1rem",
            borderRadius: "500px",
          }}
        >
          Start Your Journey
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={rightImage} alt="right" />
      </Grid>
    </Grid>
  );
};

export default Section1;
