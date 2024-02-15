import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Stack,
  Radio,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect } from "react";

interface CarouselProps {
  data: {
    name: string;
    image: string;
  }[];
  isAutoPlay: boolean;
  interval: number;
  isNavigation: boolean;
  isPagination: boolean;
  noOfItemPerSlide: number;
  isLoop: boolean;
}

const Carousel = (props: CarouselProps) => {
  const {
    data,
    isAutoPlay = false,
    interval = 2000,
    isNavigation = false,
    isPagination = false,
    noOfItemPerSlide = 1,
    isLoop = false,
  } = props;

  const [value, setValue] = useState("1");
  const noOfSlides = Math.ceil(data.length / noOfItemPerSlide);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (isAutoPlay) {
      const intervalId = setInterval(() => {
        setValue((prev) =>
          prev === noOfSlides.toString() ? "1" : (parseInt(prev) + 1).toString()
        );
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [isAutoPlay, interval, noOfSlides]);

  useEffect(() => {
    if (isLoop) {
      const intervalId = setInterval(() => {
        setValue((prev) =>
          prev === noOfSlides.toString() ? "1" : (parseInt(prev) + 1).toString()
        );
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [isLoop, interval, noOfSlides]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
      }}
    >
      {isNavigation && (
        <ArrowBackIosIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            setValue((prev) =>
              prev === "1"
                ? noOfSlides.toString()
                : (parseInt(prev) - 1).toString()
            )
          }
        />
      )}
      <Stack
        sx={{
          overflow: "hidden",
          direction: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            gap: "1rem",
            transform: `translateX(-${(parseInt(value) - 1) * 100}%)`,
            transition: "transform 0.5s ease",
            width: "100%",
          }}
        >
          {data.map((country, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
              }}
            >
              <img
                src={country.image}
                alt={country.name}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <Typography variant="h6">{country.name}</Typography>
            </Box>
          ))}
        </Box>
        {isPagination && (
          <RadioGroup
            name="carousel"
            value={value}
            onChange={handleChange}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {Array.from({ length: noOfSlides }).map((_, index) => (
              <FormControlLabel
                label=""
                key={index}
                value={(index + 1).toString()}
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                  />
                }
              />
            ))}
          </RadioGroup>
        )}
      </Stack>

      {isNavigation && (
        <ArrowForwardIosIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            setValue((prev) =>
              prev === noOfSlides.toString()
                ? "1"
                : (parseInt(prev) + 1).toString()
            )
          }
        />
      )}
    </Stack>
  );
};

export default Carousel;
/*
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        direction: "row",
        width: "100%",
      }}
    >
      {isNavigation && (
        <ArrowBackIosIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            setValue((prev) =>
              prev === "1"
                ? noOfSlides.toString()
                : (parseInt(prev) - 1).toString()
            )
          }
        />
      )}
      <Stack
        sx={{
          overflow: "hidden",
          direction: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            direction: "row",
            gap: "1rem",
            transform: `translateX(-${(parseInt(value) - 1) * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {data.map((country, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
              }}
            >
              <img
                src={country.flagUrl}
                alt={country.name}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <Typography variant="h6">{country.name}</Typography>
            </Box>
          ))}
        </Box>
        {isPagination && (
          <RadioGroup
            name="carousel"
            value={value}
            onChange={handleChange}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            {Array.from({ length: noOfSlides }).map((_, index) => (
              <FormControlLabel
                label=""
                key={index}
                value={(index + 1).toString()}
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                    }}
                  />
                }
              />
            ))}
          </RadioGroup>
        )}
      </Stack>

      {isNavigation && (
        <ArrowForwardIosIcon
          sx={{ cursor: "pointer" }}
          onClick={() =>
            setValue((prev) =>
              prev === noOfSlides.toString()
                ? "1"
                : (parseInt(prev) + 1).toString()
            )
          }
        />
      )}
    </Box>
*/
