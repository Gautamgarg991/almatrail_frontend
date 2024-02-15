import { Stack } from "@mui/material";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        width: "100%",
      }}
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </Stack>
  );
};

export default Home;
