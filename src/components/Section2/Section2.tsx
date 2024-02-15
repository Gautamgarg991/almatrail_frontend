import { Stack, TextField } from "@mui/material";
import globe from "../../assets/globe.png";
import { Carousel } from "../index";
import SearchIcon from "@mui/icons-material/Search";

const Section2 = () => {
  const countries = [
    {
      name: "India",
      image: "https://flagsapi.com/IN/flat/64.png",
    },
    {
      name: "United States",
      image: "https://flagsapi.com/US/flat/64.png",
    },
    {
      name: "United Kingdom",
      image: "https://flagsapi.com/GB/flat/64.png",
    },
    {
      name: "Australia",
      image: "https://flagsapi.com/AU/flat/64.png",
    },
    {
      name: "Canada",
      image: "https://flagsapi.com/CA/flat/64.png",
    },
    {
      name: "Germany",
      image: "https://flagsapi.com/DE/flat/64.png",
    },
    {
      name: "France",
      image: "https://flagsapi.com/FR/flat/64.png",
    },
    {
      name: "Japan",
      image: "https://flagsapi.com/JP/flat/64.png",
    },
    {
      name: "China",
      image: "https://flagsapi.com/CN/flat/64.png",
    },
    {
      name: "Russia",
      image: "https://flagsapi.com/RU/flat/64.png",
    },
  ];
  return (
    <Stack
      sx={{
        height: "300px",
        width: "100%",
        backgroundColor: "#141E46",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${globe})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Carousel
        data={countries}
        isAutoPlay={false}
        interval={2000}
        isNavigation={false}
        isPagination={false}
        noOfItemPerSlide={3}
        isLoop={false}
      />
      <TextField
        label="Search for universities in your dream country"
        variant="outlined"
        size="small"
        sx={{
          width: "50%",
          marginTop: "1rem",
          backgroundColor: "white",
          borderRadius: "500px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "500px",
          },
        }}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
    </Stack>
  );
};

export default Section2;
