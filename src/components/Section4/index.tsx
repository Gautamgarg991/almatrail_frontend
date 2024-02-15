import { Grid, Stack } from "@mui/material";

const Section4 = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100%",
        height: "500px",
      }}
      spacing={2}
    >
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "grey",
            color: "white",
            borderRadius: "10px",
            fontSize: "2rem",
          }}
        >
          <h1>24</h1>
          <p>Universities</p>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sx={{
              width: "100%",
              height: "50%",
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "grey",
                color: "white",
                borderRadius: "10px",
                fontSize: "2rem",
              }}
            >
              <h1>13</h1>
              <p>Countries</p>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              width: "100%",
              height: "50%",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "grey",
                    color: "white",
                    fontSize: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <h1>121</h1>
                  <p>Mentors</p>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "grey",
                    color: "white",
                    fontSize: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <h1>48</h1>
                  <p>Courses</p>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "grey",
            color: "white",
            fontSize: "2rem",
            borderRadius: "10px",
          }}
        >
          <p>Helped</p>
          <h1>134</h1>
          <p>Students</p>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Section4;
